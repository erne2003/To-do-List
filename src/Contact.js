// Contact.js
import React, { useRef, useState, useEffect } from "react";
import SideBar from "./SideBar";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  console.log("EmailJS Public Key:", process.env.REACT_APP_EMAILJS_USER_ID);
console.log("EmailJS service Key:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log("EmailJS template Key:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);

  useEffect(() => {
    // Initialize with your EmailJS user ID
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID); // Make sure to set this in your .env file
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending…");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,   // replace with your service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // replace with your template ID
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID, // replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent! Thanks for reaching out.");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Oops—something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="Contact-Form border border-gray-300 shadow-md">
      <h1
        style={{
          position: "relative",
          top: "0px",
          alignContent: "center",
          left: "125px",
        }}
      >
        Contact Us!
      </h1>
      <div className="Contact-form">
        <p
          style={{
            position: "relative",
            fontFamily: "lora",
            justifyContent: "center",
          }}
        >
          Have questions or feedback? Reach out to us using the form below.
        </p>
        <div style={{ position: "relative", left: "80px" }}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              position: "relative",
              left: "40px",
            }}
          >
            <label>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "30px",
                }}
              >
                Name
              </div>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Name"
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  minWidth: "100px",
                  minHeight: "30px",
                }}
              />
            </label>

            <label>
              <div
                style={{
                  width: "fit-content",
                  minWidth: "100px",
                  fontSize: "30px",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                Email
              </div>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email"
                style={{
                  width: "fit-content",
                  minWidth: "100px",
                  minHeight: "30px",
                }}
              />
            </label>

            <label>
              <div
                style={{
                  width: "fit-content",
                  minWidth: "100px",
                  fontSize: "30px",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                Message
              </div>
              <textarea
                name="message"
                placeholder="Message"
                required
                style={{ minHeight: "30px" }}
              />
            </label>

            <button
              type="submit"
              style={{
                width: "fit-content",
                minWidth: "100px",
                backgroundColor: "#1E3A8A",
                color: "white",
                position: "relative",
                left: "35px",
                top: "3px",
                height: "30px",
                width: "100px",
                borderRadius: "2px",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Submit
            </button>
          </form>

          {status && (
            <p
              style={{
                position: "relative",
                left: "40px",
                marginTop: "10px",
                fontStyle: "italic",
              }}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
