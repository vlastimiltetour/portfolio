import React from "react";
import portfolioData from "/src/data/portfolioData.json"

function Experience() {
  return (
  <section id="about">
      <p class="section__text__p1">Get To Know More About</p>
      <h1 class="title">Experience</h1>
      <div class="section-container">
        
        <div class="about-details-container">
          <div class="about-containers">
            <div class="experience-left">
              <img
                src="./src/assets/stocked.png"
                alt="Company icon"
                class="icon--company"
              />

            </div>
            <div class="experience-right">
              
              <h3>Python Developer</h3>
              <h4>Stocked</h4>
              <h4>2024 - Present</h4>
              <p> Developed and maintained backend services using Python and Django.

Built and tested REST APIs, including integrations with third-party services.

Implemented automation scripts and workflows to streamline operations.

Wrote comprehensive unit and integration tests using pytest (including Django admin action testing and mocked external services).

Created data processing pipelines for ingesting, validating, and transforming structured data.

Contributed to CI/CD processes and used Docker for consistent development environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
}

export default Experience;
