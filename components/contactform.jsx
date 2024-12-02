import React, { useState } from "react";
import { useRouter } from 'next/router'

function ContactForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false) 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('sending message')

    let data = {name, email, message}

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response=>{
      if(response.status === 200){
        console.log('response received')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('') 
        router.push('/thankyou')
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div>
      <h3>zacharymanningbrose@gmail.com</h3>
    </div>
  );
}

export default ContactForm;