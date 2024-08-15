import React from 'react'
import axios from 'axios'
import { useState } from 'react'

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
    <div>
        <form onSubmit={handleSubmit}>
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
  )
}

export default Contact
