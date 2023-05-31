import React from 'react';
import styles from '../styles/Food.module.css';
import Date from '../components/date';


export default function FoodCard(props){

    return (
        <div className={styles.item}>
            <h1>{props.restaurant}</h1>
            <img src={props.img} alt={props.alt}/>
            <Date dateString={props.date}/>
            <h3>{props.info}</h3>
        </div>
    )
}