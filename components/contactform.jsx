import React, { useState } from "react";

function ContactForm() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name: e.target.name,

        }
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
           
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            
           
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" required />
      
           
              <label htmlFor="message">Message:</label>
              <textarea id="message" required />
           
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default ContactForm;