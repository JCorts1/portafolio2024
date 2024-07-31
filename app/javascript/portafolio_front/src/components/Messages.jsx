import axios from "axios";
import React from 'react'
import { useState, useEffect } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/messages")
      .then(function (response) {
        console.log(response);
      });
  }, []);

  return (
    <div className='bg-red-600'>
      <h1>test</h1>
    </div>
  )
}

export default Messages
