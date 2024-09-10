import React from 'react'
import {useState, useEffect } from "react";
import Navbar from '@/components/Navbar';
import axios from "axios";

const ContactReader = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("https://portafolio2024-production.up.railway.app/messages").then(function (response) {
      setMessages(response.data);
      console.log(response);
    });
  }, []);

  <div className='bg-[#000] w-screen h-screen'>
    <div className='bg-black'>
      < Navbar />
    </div>
    <div className='w-10/12 h-full bg-black'>
      {messages.map((message) => {
        return (
          <div
            key={message.id}
            className='message-card'
          >
          <div className=''>
            <h1>{message.name}</h1>
            <h3>{message.email}</h3>
            <p>{message.content}</p>
          </div>
          </div>
        );
      })};

    </div>
  </div>
}

export default ContactReader
