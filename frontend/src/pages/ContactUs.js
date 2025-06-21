import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-overlay">
        <div className="contact-box shadow">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Type your message..." required></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
