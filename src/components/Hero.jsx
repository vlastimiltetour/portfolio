import React from "react";
import profilePic from "/src/assets/profile_pic.JPG"
import portfolioData from "/src/data/portfolioData.json"

function Hero({  }) {
  return (
  
  

 <section id="profile">
      <div class="section__pic-container">
        <img src="./src/assets/profile_pic.JPG" alt="John Doe profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">{portfolioData.personalInfo.name}</h1>
        <p class="section__text__p2">{portfolioData.personalInfo.title}</p>
        <div class="section__text__p3">
          {portfolioData.profile.description}
        </div>
        <div id="socials-container">
          <img
            src="/src/assets/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onClick={() => window.location.href = portfolioData.personalInfo.linkedin} 
          />
          <img
            src="/src/assets/github.png"
            alt="My Github profile"
            class="icon"
            onClick={() => window.location.href = portfolioData.personalInfo.github} 
          />
        </div>
      </div>
    </section>

);
}

export default Hero;