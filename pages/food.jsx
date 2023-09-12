import Layout from "../components/layout"
import Image from 'next/image';
import styles from '../styles/Food.module.css';
import FoodCard from '../components/FoodCard';
import React, { useRef, useState,useEffect } from 'react'
import data from '../public/food/data.js'

export async function getStaticProps(){
    return{
        props: {
            data,
        },
    }
} 

export default function Food({ data }){
    
    // const [loading,setloading] = useState(false)
    
    // const typeFilter = "cook"
    // useEffect(() => {
    //     setloading(true)
    //     const displayedFood = typeFilter
    //     ? data.filter(data => data.type === typeFilter)
    //     : data
    //     setloading(false)
    // }, []);
    
    const dataset = data.map(item =>
        <FoodCard 
        {...item}
        />
        )
    // if (loading) {
    //     return <h1>Loading...</h1>
    // }
    return (
        <Layout page='food'>
        <div className={styles.main}>
            {dataset}
        </div>
        </Layout>
    )
}
 