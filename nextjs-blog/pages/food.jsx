import Layout from "../components/layout"
import Image from 'next/image';
import styles from '../styles/Food.module.css';
import FoodCard from '../components/FoodCard';
import data from '../public/food/data.js'

export default function Food(){
    const dataset = data.map(item =>
        <FoodCard 
        {...item}
        />
        )
    return (
        <Layout page='food'>
        <div className={styles.main}>
            {dataset}
        </div>
        </Layout>
    )
}