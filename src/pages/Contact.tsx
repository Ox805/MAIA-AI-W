import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'partnership',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="lead">Let's discuss how we can work together</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Partnership Opportunities</h2>
              <p>
                We're actively seeking strategic partnerships to enhance our products and 
                expand our reach. Whether you're interested in integrating with our platforms, 
                exploring investment opportunities, or discussing other forms of collaboration, 
                we'd love to hear from you.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>General Inquiries</h3>
                  <p>info@maiatech.ai</p>
                </div>
                <div className="contact-method">
                  <h3>Partnership Requests</h3>
                  <p>partnerships@maiatech.ai</p>
                </div>
                <div className="contact-method">
                  <h3>Media & Press</h3>
                  <p>press@maiatech.ai</p>
                </div>
              </div>

              <div className="partnership-types">
                <h3>Types of Partnerships We Seek</h3>
                <ul>
                  <li>Technology integrations (APIs, data sharing)</li>
                  <li>Distribution and channel partnerships</li>
                  <li>Strategic investors and advisors</li>
                  <li>Industry associations and organizations</li>
                  <li>Research and development collaborations</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="type">Inquiry Type *</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="integration">API/Integration Request</option>
                    <option value="investment">Investment Inquiry</option>
                    <option value="demo">Product Demo</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    placeholder="Tell us about your interest in Maia AI and how we might work together..."
                  />
                </div>

                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="office-info">
        <div className="container">
          <h2>Our Offices</h2>
          <div className="offices-grid">
            <div className="office">
              <h3>Headquarters</h3>
              <p>United States</p>
              <p>Remote-first organization with team members across the country</p>
            </div>
            <div className="office">
              <h3>Development Centers</h3>
              <p>Distributed Team</p>
              <p>Engineers and designers working from major tech hubs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;