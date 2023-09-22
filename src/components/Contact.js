import React from "react";
import "./style/Contact.css";

const Contact = () => {
  return (
    <div className="maincon">
      <h1>Get in Touch</h1>
      <h5>Contact Me</h5>
      <div className="coninfo">
        <div className="email">
          <i className="fa-solid fa-envelope"></i>
          <h2>Email</h2>
          <p>nazimmds025@gmail.com</p>
        </div>
        <div className="mob">
          <i class="fa-brands fa-whatsapp"></i>
          <h2>WhatsApp</h2>
          <p>+91 9981693954</p>
        </div>
        <div className="linkedin">
          <i class="fa-brands fa-linkedin"></i>
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/nazim-raza-57758a1b1">
            <p>Connect</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
