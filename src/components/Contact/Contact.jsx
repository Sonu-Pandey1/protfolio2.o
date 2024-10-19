

import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  // Function to reset the form fields
  const resetForm = () => {
    if (form.current) {
      form.current.reset();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65xpxd6",
        "template_clvh2x8",
        form.current,
        "vJtPfYVWorqbwEHw1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          resetForm(); // Resetting the form fields after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="to_name" className="user" placeholder="Name" required/>
          <input type="email" name="from_name" className="user" placeholder="Email" required />
          <textarea name="message" className="user" placeholder="Message"  />
          <input type="submit" value="Send" className="button" />
          <p>Contact me on ---: sonupandeybaldeo2003@gmail.com</p>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
        
      </div>
      
    </div>
    
  );
};

export default Contact;