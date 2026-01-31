import React from "react";
import portfolioData from "/src/data/portfolioData.json"
import Experience from "./Experience";

function Contact() {
    return (

  <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="./src/assets/email.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:{portfolioData.personalInfo.email}">{portfolioData.personalInfo.email}</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="./src/assets/phone.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href={portfolioData.personalInfo.phone}>{portfolioData.personalInfo.phone}</a></p>
        </div>
      </div>
    </section>
    )
}

export default Contact;