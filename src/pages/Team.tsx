import React from 'react';
import '../styles/Team.css';

const Team: React.FC = () => {
  return (
    <div className="team-page">
      <section className="team-hero">
        <div className="container">
          <h1>Our Team</h1>
          <p className="lead">Experienced Innovators Building the Future</p>
        </div>
      </section>

      <section className="leadership">
        <div className="container">
          <h2>Leadership</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">CEO</div>
              </div>
              <h3>Chief Executive Officer</h3>
              <p className="member-title">Founder & CEO</p>
              <p className="member-bio">
                Serial entrepreneur with 15+ years in technology and AI. Previously founded 
                two successful SaaS companies and led product innovation at a Fortune 500 
                tech company. Passionate about leveraging AI to solve real-world problems.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">CTO</div>
              </div>
              <h3>Chief Technology Officer</h3>
              <p className="member-title">Co-Founder & CTO</p>
              <p className="member-bio">
                Expert in AI/ML with a PhD in Computer Science. Former principal engineer 
                at leading AI research labs. Published author on machine learning applications 
                and holds multiple patents in AI technology.
              </p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">CPO</div>
              </div>
              <h3>Chief Product Officer</h3>
              <p className="member-title">Co-Founder & CPO</p>
              <p className="member-bio">
                Product visionary with experience launching consumer and enterprise products. 
                Led product teams at multiple unicorn startups. Focuses on user-centric 
                design and rapid iteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="advisory-board">
        <div className="container">
          <h2>Advisory Board</h2>
          <div className="advisors-grid">
            <div className="advisor">
              <h4>AI Research Advisor</h4>
              <p>Former Director of AI Research at major tech company</p>
            </div>
            <div className="advisor">
              <h4>Sports Industry Advisor</h4>
              <p>CEO of national sports technology platform</p>
            </div>
            <div className="advisor">
              <h4>Enterprise Sales Advisor</h4>
              <p>Former VP Sales at leading B2B SaaS company</p>
            </div>
            <div className="advisor">
              <h4>Marketing Strategy Advisor</h4>
              <p>CMO with experience scaling AI-powered products</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-culture">
        <div className="container">
          <h2>Our Culture</h2>
          <div className="culture-content">
            <p>
              At Maia AI, we believe that great products come from great teams. We've built 
              a culture that encourages innovation, values diverse perspectives, and rewards 
              bold thinking. Our distributed team works collaboratively across time zones, 
              united by our shared mission to transform industries through AI.
            </p>
            <div className="culture-values">
              <div className="culture-card">
                <h3>Innovation & Experimentation</h3>
                <p>We encourage trying new approaches and learning from both successes and failures.</p>
              </div>
              <div className="culture-card">
                <h3>User Obsession</h3>
                <p>Every decision starts with asking "How does this benefit our users?"</p>
              </div>
              <div className="culture-card">
                <h3>Transparency & Trust</h3>
                <p>Open communication and mutual trust form the foundation of our teamwork.</p>
              </div>
              <div className="culture-card">
                <h3>Continuous Learning</h3>
                <p>In the fast-moving AI landscape, we're all students and teachers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-team">
        <div className="container">
          <h2>Join Our Team</h2>
          <p className="join-intro">
            We're always looking for exceptional talent to join our mission. If you're 
            passionate about AI and want to build products that matter, we'd love to hear 
            from you.
          </p>
          <div className="open-positions">
            <h3>Current Openings</h3>
            <div className="positions-list">
              <div className="position">
                <h4>Senior Full Stack Engineer</h4>
                <p>React, Python, Cloud Infrastructure</p>
              </div>
              <div className="position">
                <h4>AI/ML Engineer</h4>
                <p>Computer Vision, NLP, Production ML Systems</p>
              </div>
              <div className="position">
                <h4>Product Designer</h4>
                <p>UI/UX, Mobile Design, User Research</p>
              </div>
            </div>
            <a href="/contact" className="btn-primary">View All Positions</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;