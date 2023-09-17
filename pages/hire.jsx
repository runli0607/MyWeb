import React from 'react'
import Layout from '../components/layout'
import HiringForm from '../components/Form'
import styles from '../styles/Hire.module.css'

export default function Hire() {
    const [formData, setFormData] = React.useState({
        company: '',
        email: ''
    })

    const [status, setStatus] = React.useState('idle')
    const [error, setError] = React.useState(null)


    async function logging() {
        setStatus('submitting')
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(formData);
        setStatus('idle')
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Handle response here (e.g., show success message)
        } catch (error) {
            // Handle error here
        }
        logging()
    }

    function handleChange(event) {
        const { name, value } = event.target
        console.log(`${name} is about to change to ${value}`)
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    React.useEffect(() => {
        localStorage.getItem('formData') &&
            setFormData(JSON.parse(localStorage.getItem('formData')))
    }, [])


    React.useEffect(() => {
        console.log("the data has been processed")
        localStorage.setItem("formData", JSON.stringify(formData))

    }, [formData])


    return (
        <Layout page='hire'>
            <section className={styles.container}>
            <h1>
                Welcome, please enter your Company Name and you contact details
            </h1>
                <HiringForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    status={status}
                />
            </section>
        </Layout>
    )
}