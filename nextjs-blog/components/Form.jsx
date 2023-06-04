import React from 'react'
import styles from '../styles/Hire.module.css'

export default function Form(props){

    return(
        <div className={styles['hire']}>
            <form>
                <input 
                type="text" 
                placeholder='Company'
                name="company"
                value={props.formData.company}
                onChange={props.handleChange}
                />
                <input 
                type="email" 
                placeholder='Email'
                name="email"
                value={props.formData.email}
                onChange={props.handleChange}
                />

            </form>

        </div>
    )

}