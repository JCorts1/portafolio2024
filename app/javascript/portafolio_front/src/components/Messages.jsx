import axios from "axios";
import React from 'react'
import { useState, useEffect } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("https://portafolio2024-production.up.railway.app/messages")
      .then(function (response) {
        console.log(response);
      });
  }, []);

  return (
    <div className='bg-red-600'>
      <h1>test1234</h1>
    </div>
  )
}

export default Messages
