import React from 'react';
import '../styles/EdgeViewProduct.css';

const EdgeViewProduct: React.FC = () => {
  return (
    <div className="edgeview-product-page">
      <section className="ev-hero">
        <div className="container">
          <h1>EdgeView Pickleball</h1>
          <p className="tagline">AI-Powered Sports Platform Starting with Pickleball</p>
        </div>
      </section>

      <section className="ev-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Revolutionizing Sports with AI Technology</h2>
              <p>
                EdgeView is our flagship AI-powered sports platform, beginning with pickleball and 
                designed to expand across multiple sports. We're combining tournament management 
                with revolutionary AI capabilities including video analysis, automated coaching 
                insights, and performance analytics that were previously only available to 
                professional athletes.
              </p>
              <p>
                Starting with the rapidly growing pickleball community, our platform addresses 
                challenges faced by tournament directors, clubs, and players while introducing 
                groundbreaking AI features. From intelligent match video analysis to personalized 
                coaching recommendations, EdgeView represents the future of sports technology.
              </p>
              <p>
                Our vision extends far beyond pickleball - the AI technologies we're developing 
                can transform tennis, badminton, table tennis, and any racquet sport, creating 
                a comprehensive ecosystem for sports improvement and competition management.
              </p>
            </div>
            <div className="overview-stats">
              <div className="stat-card">
                <h3>50+</h3>
                <p>Tournaments Planned</p>
              </div>
              <div className="stat-card">
                <h3>1000+</h3>
                <p>Target Players</p>
              </div>
              <div className="stat-card">
                <h3>Q1 2025</h3>
                <p>Full Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ev-features">
        <div className="container">
          <h2>Platform Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>DUPR Integration</h3>
              <p>
                Seamless integration with DUPR rating system for accurate player matching 
                and automatic rating updates after tournament matches.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Smart Bracket Management</h3>
              <p>
                AI-powered bracket generation that considers player ratings, availability, 
                and court assignments for optimal tournament flow.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile-First Design</h3>
              <p>
                Full functionality on mobile devices, allowing players to check schedules, 
                report scores, and track progress from anywhere.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h3>AI Video Analysis</h3>
              <p>
                Revolutionary AI-powered video analysis that automatically tracks shots, identifies 
                patterns, and provides personalized coaching insights to help players improve faster.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>Automated Coaching</h3>
              <p>
                Machine learning algorithms analyze player performance to deliver personalized 
                coaching recommendations, technique improvements, and strategic insights.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Performance Analytics</h3>
              <p>
                Advanced AI analytics track player progression, shot accuracy, court positioning, 
                and game patterns to provide professional-level performance insights.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Club Management</h3>
              <p>
                Comprehensive tools for pickleball clubs to manage members, organize events, 
                and track player development.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Integrated Payments</h3>
              <p>
                Secure payment processing for tournament registration fees with support for 
                refunds and partner payment splitting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dupr-partnership">
        <div className="container">
          <h2>DUPR Partnership Benefits</h2>
          <div className="partnership-content">
            <div className="benefits-list">
              <h3>Why DUPR Integration Matters</h3>
              <ul>
                <li>
                  <strong>Accurate Seeding:</strong> Automatically seed tournaments based on 
                  current DUPR ratings, ensuring competitive and fair matches.
                </li>
                <li>
                  <strong>Real-time Updates:</strong> Match results instantly update player 
                  ratings, keeping the pickleball community's data current.
                </li>
                <li>
                  <strong>Player Verification:</strong> Leverage DUPR's player database for 
                  easy registration and identity verification.
                </li>
                <li>
                  <strong>Enhanced Analytics:</strong> Combine DUPR's rating algorithms with 
                  our AI insights for deeper player performance analysis.
                </li>
                <li>
                  <strong>Community Growth:</strong> Help grow the sport by making it easier 
                  for players to find appropriate competition levels.
                </li>
              </ul>
            </div>
            <div className="partnership-vision">
              <h3>Our Vision for Integration</h3>
              <p>
                We see the DUPR partnership as fundamental to EdgeView's success. By building 
                on DUPR's established rating system, we can focus on creating innovative 
                tournament management features while ensuring our platform integrates seamlessly 
                with the existing pickleball ecosystem.
              </p>
              <p>
                Our API integration plans include real-time rating lookups, automatic result 
                submission, and advanced analytics that help tournament directors create 
                better competitive experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-architecture">
        <div className="container">
          <h2>Technical Excellence</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>Cloud Infrastructure</h3>
              <p>Built on Google Cloud Platform for reliability and scalability</p>
            </div>
            <div className="tech-card">
              <h3>Modern Tech Stack</h3>
              <p>React frontend, Python FastAPI backend, Firebase authentication</p>
            </div>
            <div className="tech-card">
              <h3>API-First Design</h3>
              <p>RESTful APIs ready for third-party integrations and mobile apps</p>
            </div>
            <div className="tech-card">
              <h3>Security First</h3>
              <p>Enterprise-grade security with encrypted data and secure payment processing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sports-expansion">
        <div className="container">
          <h2>Multi-Sport Vision</h2>
          <div className="expansion-content">
            <div className="expansion-text">
              <h3>Beyond Pickleball: The Future of AI Sports Technology</h3>
              <p>
                While we're starting with pickleball, our AI technology is designed to revolutionize 
                multiple sports. The computer vision, machine learning, and performance analysis 
                capabilities we're developing can be adapted to any racquet sport and beyond.
              </p>
              <h4>Target Sports for Expansion:</h4>
              <ul>
                <li><strong>Tennis:</strong> Professional-level video analysis for all skill levels</li>
                <li><strong>Badminton:</strong> Shuttlecock tracking and strategic analysis</li>
                <li><strong>Table Tennis:</strong> High-speed ball tracking and spin analysis</li>
                <li><strong>Squash:</strong> Court positioning and shot pattern optimization</li>
                <li><strong>Other Racquet Sports:</strong> Expandable to any similar sport</li>
              </ul>
              <p>
                Our vision is to democratize professional-level sports analysis, making advanced 
                AI coaching and performance insights accessible to athletes at every level across 
                multiple sports disciplines.
              </p>
            </div>
            <div className="expansion-benefits">
              <h3>Why Multi-Sport Matters</h3>
              <div className="benefit-cards">
                <div className="benefit-card">
                  <h4>Scalable AI Technology</h4>
                  <p>Core algorithms adapt across sports with sport-specific customizations</p>
                </div>
                <div className="benefit-card">
                  <h4>Larger Market Opportunity</h4>
                  <p>Expanding addressable market from pickleball to all racquet sports</p>
                </div>
                <div className="benefit-card">
                  <h4>Cross-Sport Learning</h4>
                  <p>Insights from one sport enhance AI capabilities across all sports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap">
        <div className="container">
          <h2>Development Roadmap</h2>
          <div className="timeline">
            <div className="timeline-item completed">
              <h3>Q3 2024</h3>
              <p>Platform architecture and core tournament features</p>
            </div>
            <div className="timeline-item completed">
              <h3>Q4 2024</h3>
              <p>Beta testing with select clubs and tournament directors</p>
            </div>
            <div className="timeline-item active">
              <h3>Q1 2025</h3>
              <p>DUPR integration and public launch</p>
            </div>
            <div className="timeline-item">
              <h3>Q2 2025</h3>
              <p>AI video analysis, automated coaching, and performance analytics</p>
            </div>
            <div className="timeline-item">
              <h3>Q3 2025</h3>
              <p>Multi-sport expansion starting with tennis integration</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Tournaments?</h2>
          <p>Join us in revolutionizing pickleball tournament management</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">Partner With Us</a>
            <a href="/contact" className="btn-secondary">Request Demo</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdgeViewProduct;