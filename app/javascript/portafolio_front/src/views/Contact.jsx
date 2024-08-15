import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "../styles/Contact.css"

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    content: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    axios
        .post("http://127.0.0.1:3000/messages", { message: message });
  }

  return (
    <div className='contact-form flex justify-center items-center'>
      <div className='card-form w-8/12 h-4/6 rounded-lg'>
        <div className='form-side'>
        <form onSubmit={handleSubmit} className='form-post flex flex-col justify-center items-center'>
          <div className='name-post'>
            <label htmlFor="nameMessage">Your name / Organization</label>
            <input id="nameMessage" onChange={(event)=> {
            setMessage({...message, name:event.target.value})
            }} />
          </div>

          <div className='email-post'>
            <label htmlFor="emailMessage">Email</label>
            <input id="emailMessage" onChange={(event)=> {
              setMessage({...message, email:event.target.value})
            }}/>
          </div>

          <div className='content-post'>
            <textarea onChange={(event) => {
              setMessage({...message, content:event.target.value})
            }}></textarea>
          </div>

          <div className='button-post'>
            <button type="submit">Drop a Line</button>
          </div>
        </form>
        </div>

      </div>

    </div>
  )
}

export default Contact
