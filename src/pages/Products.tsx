import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Products.css';

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p className="lead">Innovative AI Solutions Transforming Industries</p>
        </div>
      </section>

      <section className="product-details">
        <div className="container">
          <div className="product-section" id="maia-personal">
            <div className="product-header">
              <h2>Maia Personal Assistant</h2>
              <span className="product-status active">Active Development</span>
            </div>
            <div className="product-content reverse">
              <div className="product-image">
                <img src="/images/maia-personal-icon.jpg" alt="Maia Personal Assistant" className="product-detail-img" />
              </div>
              <div className="product-description">
                <h3>Your Intelligent Productivity Companion</h3>
                <p>
                  Maia Personal Assistant leverages cutting-edge AI to help individuals manage 
                  their daily tasks, information, and workflows more efficiently. Built on 
                  advanced language models, it adapts to your unique needs and preferences.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>Natural language task management and scheduling</li>
                  <li>Intelligent information retrieval and summarization</li>
                  <li>Personalized recommendations and insights</li>
                  <li>Multi-platform synchronization</li>
                  <li>Privacy-first design with local processing options</li>
                  <li>Continuous learning from user interactions</li>
                </ul>
                <h4>Target Market:</h4>
                <p>
                  Professionals, students, and individuals seeking to enhance their productivity 
                  through intelligent AI assistance.
                </p>
                {/* <button 
                  className="btn-primary"
                  onClick={() => navigate('/products/maia-personal')}
                >
                  View Detailed Information
                </button> */}
              </div>
            </div>
          </div>

          <div className="product-section" id="maia-business">
            <div className="product-header">
              <h2>Maia Business Assistant</h2>
              <span className="product-status beta">Beta Testing</span>
            </div>
            <div className="product-content">
              <div className="product-description">
                <h3>Enterprise AI Solutions for Modern Businesses</h3>
                <p>
                  Maia Business Assistant provides scalable AI solutions tailored to enterprise 
                  needs. From automating customer service to providing intelligent business 
                  insights, we help companies leverage AI to improve efficiency and decision-making.
                </p>
                <h4>Key Features:</h4>
                <ul>
                  <li>AI-powered customer service automation</li>
                  <li>Intelligent document processing and analysis</li>
                  <li>Predictive analytics and business intelligence</li>
                  <li>Custom AI model training for specific industries</li>
                  <li>Seamless integration with existing business systems</li>
                  <li>Enterprise-grade security and compliance</li>
                </ul>
                <h4>Target Market:</h4>
                <p>
                  Medium to large enterprises seeking to integrate AI into their operations, 
                  particularly in customer service, data analysis, and process automation.
                </p>
                {/* <button 
                  className="btn-primary"
                  onClick={() => navigate('/products/maia-business')}
                >
                  View Detailed Information
                </button> */}
              </div>
              <div className="product-image">
                <img src="/images/maia-business-icon.jpg" alt="Maia Business Assistant" className="product-detail-img" />
              </div>
            </div>
          </div>

          <div className="product-section" id="edgeview">
            <div className="product-header">
              <h2>EdgeView Sports Platform</h2>
              <span className="product-status active">Active Development</span>
            </div>
            <div className="product-content reverse">
              <div className="product-image">
                <img src="/images/edgeview-icon.jpg" alt="EdgeView Sports Platform" className="product-detail-img" />
              </div>
              <div className="product-description">
                <h3>AI-Powered Sports Platform Starting with Pickleball</h3>
                <p>
                  EdgeView is our revolutionary sports technology platform that combines tournament 
                  management with cutting-edge AI capabilities. Starting with pickleball and expanding 
                  to multiple sports, we're democratizing professional-level sports analysis and 
                  coaching through artificial intelligence.
                </p>
                <h4>Key Features: <span className="development-note">(in development)</span></h4>
                <ul>
                  <li>AI-powered video analysis with automated shot tracking</li>
                  <li>Personalized coaching recommendations via machine learning</li>
                  <li>Advanced performance analytics and progression tracking</li>
                  <li>Intelligent tournament bracket generation and management</li>
                  <li>Real-time match scoring and statistics</li>
                  <li>Seamless integration with DUPR rating system</li>
                  <li>Mobile-first design for on-court accessibility</li>
                  <li>Multi-sport expansion capability (tennis, badminton, table tennis)</li>
                </ul>
                <h4>Target Market:</h4>
                <p>
                  Athletes across multiple sports seeking professional-level AI coaching, tournament 
                  directors wanting advanced management tools, clubs looking to enhance member 
                  experiences, and coaches who want data-driven insights to improve player performance.
                </p>
                {/* <button 
                  className="btn-primary"
                  onClick={() => navigate('/products/edgeview')}
                >
                  View Detailed Information
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="future-products">
        <div className="container">
          <h2>What's Next?</h2>
          <p className="future-intro">
            We're constantly exploring new opportunities where AI can create transformative value. 
            Our innovation lab is always working on the next breakthrough.
          </p>
          <div className="innovation-cta">
            <p>Interested in partnering with us or learning about upcoming products?</p>
            <button 
              className="btn-secondary"
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;