import React from 'react'
import Layout from '../components/layout'
import Form from '../components/Form'

export default function Hire(){
    const [formData, setFormData] = React.useState({
        company : '',
        email : ''
    })
        //  JSON.parse(localStorage.getItem('formData')) ||
    
    function handleChange(event){
        const {name, value} = event.target
        console.log(`${name} is about to change to ${value}`  )
        setFormData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }
    React.useEffect(()=>{
        localStorage.getItem('formData') &&
        setFormData(JSON.parse(localStorage.getItem('formData')))
    },[])


    React.useEffect(()=>{
        console.log("the data has been processed")
        localStorage.setItem("formData", JSON.stringify(formData))

    },[formData])


    return (
        <Layout page='hire'>
            <Form formData={formData} handleChange={handleChange}/>

        </Layout>
    )
}