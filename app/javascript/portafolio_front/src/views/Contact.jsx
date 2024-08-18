import React from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    content: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:3000/messages", { message: message })
      .then((response) => {
       console.log(response);
       setMessage({
        name: "",
        email: "",
        content: "",
      });
      });
  }

  return (
    <div className="contact-form flex justify-center items-center">
      <div className="contact-filter w-screen h-screen flex justify-center items-center">
      <div className="card-form w-8/12 h-4/6 rounded-lg flex">
        <div className="form-side w-6/12 h-full flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="form-post flex flex-col justify-center items-center"
          >
            <div className="name-post flex flex-col text-xl mb-4">
              <label htmlFor="nameMessage" className="text-white">
                Your name / Organization
              </label>
              <input
                value={ message.name }
                id="nameMessage"
                className="w-56 rounded-lg"
                onChange={(event) => {
                  setMessage({ ...message, name: event.target.value });
                }}
              />
            </div>

            <div className="email-post mb-4">
              <label
                htmlFor="emailMessage"
                className="text-white text-xl flex flex-col"
              >
                Email
              </label>
              <input
                value={ message.email }
                className="w-56 rounded-lg"
                id="emailMessage"
                onChange={(event) => {
                  setMessage({ ...message, email: event.target.value });
                }}
              />
            </div>

            <div className="content-post">
              <textarea
                value={ message.content }
                onChange={(event) => {
                  setMessage({ ...message, content: event.target.value });
                }}
                cols="30"
                rows="8"
                className="mt-4 rounded-lg"
              ></textarea>
            </div>

            <div className="button-post ml-32 mt-4">
              <button className="button mr-1 font-sedgwick" type="submit">
                Get in Touch
              </button>
            </div>
          </form>
        </div>
        <div className="image-side w-6/12 flex flex-col justify-evenly items-center">
          <img
            className="w-11/12"
            src="./src/img/letscreate.png"
            alt="lets-create"
          />
          <img className="w-10/12" src="./src/img/together.png" alt="" />
        </div>
      </div>
      </div>

    </div>
  );
};

export default Contact;
