import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Layout from "../components/layout"
import styles from '../styles/Moments.module.css'
import Places from '../components/Places.jsx'
import data from '../public/moments/data.js'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((active, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <sphereBufferGeometry args={[2, 30, 30]} attach="geometry" />
      <meshBasicMaterial color={0xfff1ef} attach='materials' />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'blue'} />
    </mesh>
  )
}

export default function moments() {
  const dataset = data.map(item =>
    <Places
      {...item}
    />
  )
  return (
    <Layout page='moments'>
      <main className={styles.main}>
        <section className={styles.placeArea}>
          {dataset}
        </section>

        <section className={styles.globe}>
          <Canvas flat linear>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
          </Canvas>
        </section>
      </main>
    </Layout>

  )
}