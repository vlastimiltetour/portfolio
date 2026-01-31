import React from "react";
import portfolioData from "/src/data/portfolioData.json"
import profilePic from "/src/assets/education.png"


function Skills() {
    return (
        <section id="about" class>
      <p class="section__text__p1">Review</p>
      <h1 class="title">Education & Knowledge</h1>
      <div class="section-container">
        <div class="about-details-container">
          <div class="about-containers">
                <div class="details-container-skills">
                  <img
                    src="/src/assets/experience.png"
                    alt="Education icon"
                    class="icon"
                  />
                  <h3>Education</h3>
                  <p>MSc., Psychology.</p>
                  <p>Charles of University</p>
                  <p>2014 - 2019</p>
                </div>
                <div class="details-container-skills">
                  <img
                    src="/src/assets/experience.png"
                    alt="Education icon"
                    class="icon"
                  />
                  <h3>Courses</h3>
                  
                  <p>Bee IT, Python Course, 2022
                    <a href="https://www.coursera.org/professional-certificates/meta-back-end-developer">Meta Back-End Developer Professional Certificate, Meta, 2025</a>

    Meta, [DeepLearning.AI Data Engineering](https://www.coursera.org/professional-certificates/data-engineering), 2025</p>
                </div>
          </div>

                  <div class="about-containers">
                    <div class="details-container-skills">
                      <img
                        src="/src/assets/experience.png"
                        alt="Experience icon"
                        class="icon"
                      />
                      <h3>Skills</h3>
                      <p>### Skills

        Python 3.9

        Django

        Flask

        PostgreSQL 

        REST API 

        Git

        Pandas

        Numpy

        Scikit-learn

        Matplotlib

        Joblib 

        Requests

        Boto3

        Oauthlib

        Docker

        DigitalOcean 

        AWS Lightsail 

        Flake8

        Pytest

        Black

        Isort

        Jinja2</p>
                    </div>
                    
                          <div class="details-container-skills">
                            <img
                              src="/src/assets/experience.png"
                              alt="Education icon"
                              class="icon"
                            />
                            <h3>Knowledge Base</h3>
                            <p><a href="https://www.manning.com/books/grokking-algorithms">Grokking Algorithms, Aditya Y. Bhargava</a>
              - [Python 3 Object-Oriented Programming Dusty Phillips](https://www.amazon.com/Python-3-Object-Oriented-Programming/dp/1849511268)
              </p>
                          </div>
          </div>
        </div>
      </div>
     
    </section>
    )
}

export default Skills;