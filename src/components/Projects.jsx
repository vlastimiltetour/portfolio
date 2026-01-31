import React from "react";
import portfolioData from "/src/data/portfolioData.json"

function Projects() {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      
     
      <div class="project-details-container">
        <div class="about-containers-projects">
          {/* next container*/}
          <div class="details-container color-container">
            <div class="article-container">
             
            </div>
            <div class="title-wrapper">
            <h2 class="experience-sub-title project-title">Efir The Brand</h2>
            <span class="badge"> Django & Web</span>
            </div>
            <img src="/src/assets/efir.png" class="project-image"></img>
            <p class="project-description">

I have complete ownership over this customer-facing e-commerce website specializing in selling lingerie products and achieving significant revenue. This application is built using the Django framework, ensuring robust and scalable performance. The development and deployment process incorporates Docker for containerization and DigitalOcean for hosting, enabling smooth and efficient operations. The website offers a wide range of functionalities, including catalog browsing with filtering options, a coupon system for customers, product recommendation system, questionnaires, newsletter subscriptions, and payment capabilities.

Key integrations include:


<li>Shipping Vendors: Seamless integration with Zasilkovna and PPL for streamlined logistics and delivery.</li>
<li>Payment Gateway: Secure and efficient payment processing through Stripe.</li>
<li>Analytics: Comprehensive data tracking and analysis using Google Analytics.</li>
<li>Marketing: Enhanced marketing capabilities through Leadhub integration.</li>

The project demands both backend and frontend expertise, making it one of the most complex undertakings in terms of security, deployment, and various integrations. Advanced coding standards are maintained using linters such as black, isort, flake8, and ruff, ensuring high code quality and consistency throughout the development process.

Key takeaways: Developing and maintaining a real-time production application with complex functionalities such as coupons, customer email notifications, and other features presents significant challenges. These challenges include anticipating and handling errors, as well as continually enhancing the code to make it more robust.</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href ='https://github.com/vlastimiltetour/etb'}
                
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://www.efirthebrand.cz/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* next container*/}
          <div class="details-container color-container">
            <div class="article-container">
             
            </div>
            <div class="title-wrapper">
            <h2 class="experience-sub-title project-title">Product Recommendation</h2>
            <span class="badge">Machine Learning</span>
            </div>
            <img src="/src/assets/product_recommendation.png" class="project-image"></img>
            <p class="project-description">

**Content-Based Product Recommendation System |  ML**

**GitHub:** https://github.com/vlastimiltetour/content_based_recommender

This project focuses on building a product recommendation system by utilizing product data from the Efir brand's webpage. The workflow includes:

1. **Data Collection**: Extracting product data from the Efir brand's feed & **element tree**.
2. **Data Preparation**: Using **pandas** to adjust and clean the data in a DataFrame format.
3. **Feature Extraction**: Leveraging product descriptions as the source data, applying **TF-IDF** **vectorization** by **sci-kit** to extract relevant features.
4. **Similarity Calculation**: Implementing cosine similarity using **scikit-learn** to determine product similarities.
5. **Clustering**: Applying the elbow method to estimate the optimal number of **clusters** for product categorization.
6. **Recommendation System**: Predicting and recommending products based on the calculated similarities.

This system is designed to provide accurate and efficient product recommendations, enhancing the user experience on Efir's platform. Major tools: Python, Sci-kit learn, ETtree, Pyplot.
Key takeaways: Collecting data, rethinking data relationships, setting up training of the model, etc.</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/vlastimiltetour/etb"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://www.efirthebrand.cz/'"
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* next container*/}
          <div class="details-container color-container">
            <div class="article-container">
             
            </div>
            <div class="title-wrapper">
            <h2 class="experience-sub-title project-title">Scorecard Analysis</h2>
            <span class="badge">Data Analysis & Data Science</span>
            </div>
            <img src="/src/assets/product_recommendation.png" class="project-image"></img>
            <p class="project-description">

A data analysis conducted on professional data from hiring for educative purposes. Analysis has been run in google colab. 

Key takeaways: The data quality issue.</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/vlastimiltetour/etb"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://www.efirthebrand.cz/'"
              >
                Live Demo
              </button>
            </div>
          </div>
           {/* next container*/}
          <div class="details-container color-container">
            <div class="article-container">
             
            </div>
            <div class="title-wrapper">
            <h2 class="experience-sub-title project-title">Stockisimo</h2>
            <span class="badge"> Django & Web</span>
            </div>
            <img src="/src/assets/efir.png" class="project-image"></img>
            <p class="project-description">

I have complete ownership over this customer-facing e-commerce website specializing in selling lingerie products and achieving significant revenue. This application is built using the Django framework, ensuring robust and scalable performance. The development and deployment process incorporates Docker for containerization and DigitalOcean for hosting, enabling smooth and efficient operations. The website offers a wide range of functionalities, including catalog browsing with filtering options, a coupon system for customers, product recommendation system, questionnaires, newsletter subscriptions, and payment capabilities.

Key integrations include:


<li>Shipping Vendors: Seamless integration with Zasilkovna and PPL for streamlined logistics and delivery.</li>
<li>Payment Gateway: Secure and efficient payment processing through Stripe.</li>
<li>Analytics: Comprehensive data tracking and analysis using Google Analytics.</li>
<li>Marketing: Enhanced marketing capabilities through Leadhub integration.</li>

The project demands both backend and frontend expertise, making it one of the most complex undertakings in terms of security, deployment, and various integrations. Advanced coding standards are maintained using linters such as black, isort, flake8, and ruff, ensuring high code quality and consistency throughout the development process.

Key takeaways: Developing and maintaining a real-time production application with complex functionalities such as coupons, customer email notifications, and other features presents significant challenges. These challenges include anticipating and handling errors, as well as continually enhancing the code to make it more robust.</p>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href ='https://github.com/vlastimiltetour/etb'}
                
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.location.href='https://www.efirthebrand.cz/'}
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* end container*/}
          
        
          
        </div>
      </div>

    </section>
  );
}

export default Projects;
