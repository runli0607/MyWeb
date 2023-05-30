import React from 'react';
import styles from '../styles/Moments.module.css'

export default function Places(props){

    return(
        <div className={styles.placecard}>
        <h3>{props.cityname}</h3>
        </div>
    )
}