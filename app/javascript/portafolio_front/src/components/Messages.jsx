import axios from "axios";
import React from 'react'
import { useState, useEffect } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://13.51.37.112:3000/messages")
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
