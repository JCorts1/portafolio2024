import React from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/Contact.css";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    content: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    // Assuming 'message' is a state object containing the data you want to send
    const data = {
      message: message,
    };

    axios
      .post(
        "http://13.51.37.112:3000/messages",
        JSON.stringify(data), // Convert the data object to a JSON string
        {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setMessage({
          name: "",
          email: "",
          content: "",
        });
      })
      .catch((error) => {
        console.error("There was an error submitting the message:", error);
      });
  }
  return (
    <div className="contact-form">
      <div className="contact-filter">
        <Navbar />
        <div className="contact-content">
          <div className="card-form">
            <div className="form-side flex justify-center">
              <form
                onSubmit={handleSubmit}
                className="form-post"
              >
                <div className="name-post flex flex-col text-xl mb-4">
                  <label htmlFor="nameMessage" className="text-white">
                    Your name / Organization
                  </label>
                  <input
                    value={message.name}
                    id="nameMessage"
                    className="name-input w-56 rounded-lg"
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
                    value={message.email}
                    className="email-input w-56 rounded-lg"
                    id="emailMessage"
                    onChange={(event) => {
                      setMessage({ ...message, email: event.target.value });
                    }}
                  />
                </div>

                <div className="content-post">
                  <textarea
                    value={message.content}
                    onChange={(event) => {
                      setMessage({ ...message, content: event.target.value });
                    }}
                    cols="30"
                    rows="8"
                    className="content-input mt-4 rounded-lg"
                  ></textarea>
                </div>

                <div className="button-post">
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
    </div>
  );
};

export default Contact;
