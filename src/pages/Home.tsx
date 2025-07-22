import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Building Tomorrow's AI-Powered Businesses</h1>
          <p className="tagline">Transforming Industries Through AI Innovation</p>
          <p className="hero-description">
            We're a technology innovation lab that identifies transformative opportunities 
            in the AI landscape and builds category-defining software products. From 
            revolutionizing sports with EdgeView to enhancing productivity with our AI 
            assistants, we're creating the future, one innovation at a time.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn-primary">Explore Our Products</a>
            <a href="/about" className="btn-secondary">About Our Approach</a>
          </div>
        </div>
      </section>

      <section id="products" className="products-showcase">
        <div className="container">
          <h2>Our Flagship Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">
                <img src="/images/maia-personal-icon.jpg" alt="Maia Personal Assistant" className="product-icon-img" />
              </div>
              <h3>Maia Personal Assistant</h3>
              <p>Your AI-powered productivity companion. Leveraging advanced language models and adaptive learning, Maia Personal Assistant transforms how individuals manage tasks, information, and daily workflows.</p>
              <a href="https://www.myaiassistant.net" className="learn-more" target="_blank" rel="noopener noreferrer">Learn More →</a>
            </div>
            <div className="product-card">
              <div className="product-icon">
                <img src="/images/maia-business-icon.jpg" alt="Maia Business Assistant" className="product-icon-img" />
              </div>
              <h3>Maia Business Assistant</h3>
              <p>Enterprise-grade AI solutions that adapt to your business needs. From customer service automation to intelligent data analysis, we're helping businesses unlock the full potential of AI.</p>
              <a href="https://www.myaiassistant.net" className="learn-more" target="_blank" rel="noopener noreferrer">Learn More →</a>
            </div>
            <div className="product-card">
              <div className="product-icon">
                <img src="/images/edgeview-icon.jpg" alt="EdgeView Sports Platform" className="product-icon-img" />
              </div>
              <h3>EdgeView Platform</h3>
              <p>Revolutionary AI-powered sports platform starting with pickleball. EdgeView combines tournament management with cutting-edge video analysis, automated coaching, and performance analytics that democratize professional-level sports technology.</p>
              <a href="/products/edgeview" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="company-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <h3>Founded</h3>
              <p>2024</p>
            </div>
            <div className="stat">
              <h3>Experience</h3>
              <p>45+ Years Combined</p>
            </div>
            <div className="stat">
              <h3>Products</h3>
              <p>3 Active Innovations</p>
            </div>
            <div className="stat">
              <h3>Mission</h3>
              <p>AI-Driven Transformation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation-approach">
        <div className="container">
          <h2>Our Innovation Approach</h2>
          <p className="approach-intro">
            At Maia AI, we don't just build products – we identify market opportunities where AI 
            can create transformative value and develop solutions that define new categories.
          </p>
          <div className="approach-grid">
            <div className="approach-card">
              <h3>Market Discovery</h3>
              <p>We continuously scan industries for opportunities where AI can solve real problems and create significant value.</p>
            </div>
            <div className="approach-card">
              <h3>Rapid Prototyping</h3>
              <p>Our agile development process allows us to quickly validate ideas and iterate based on user feedback.</p>
            </div>
            <div className="approach-card">
              <h3>Strategic Partnerships</h3>
              <p>We collaborate with industry leaders to ensure our solutions integrate seamlessly into existing ecosystems.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;