import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {

const [from, setFrom] = useState('');
const [to, setTo] = useState('');
const [journeyDate, setJourneyDate] = useState('');

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: '#FB9E3A', height: '70px' }}>
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: '28px' }}>
            <span style={{ color: '#F3F3E0' }}>EASY</span><span style={{ color: '#0E2148' }}>RIDE</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3 fw-bold">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In/Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Background with Search */}
      <div className="search-section">
        <div className="overlay">
          <h2 className="search-heading">BOOK YOUR JOURNEY !!</h2>
          <div className="search-form d-flex gap-2 flex-wrap">
            <select className="form-select " required value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="">From</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="NITK">NITK</option>
              <option value="Khammam">Khammam</option>
              <option value="Vemulawada">Vemulawada</option>
              <option value="Vizianagaram">Vizianagaram</option>
              <option value="Palamaner">Palamaner</option>
            </select>
            <select className="form-select " required value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="">To</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="NITK">NITK</option>
              <option value="Khammam">Khammam</option>
              <option value="Vemulawada">Vemulawada</option>
              <option value="Vizianagaram">Vizianagaram</option>
              <option value="Palamaner">Palamaner</option>
            </select>
            <input
              type="date"
              className="form-control "
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              required
            />

            <button
              className="btn-search"
              onClick={() => {
                
                if (from === '' || to === '') {
                  alert("Please select both cities");
                } else if (from === to) {
                  alert("From and To cities cannot be the same");
                } else {
                     alert("Please log in to search for buses.");;
                }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Popular Routes */}
      <section className="container my-5">
        <h2 className="section-title">Popular Routes</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card route-card">
              <div className="card-body text-center">
                <h5>NITK → Bengaluru</h5>
                <p>Starting from ₹899</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card route-card">
              <div className="card-body text-center">
                <h5>NITK → Hyderabad</h5>
                <p>Starting from ₹1799</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card route-card">
              <div className="card-body text-center">
                <h5>Hyderabad → Khammam</h5>
                <p>Starting from ₹449</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section text-center py-5">
        <h2 className="section-title mb-4">Why Choose EasyRide?</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <h5>✅ Instant Booking</h5>
            <p>Book your seats within seconds.</p>
          </div>
          <div className="col-md-3">
            <h5>🚌 Live Seat Availability</h5>
            <p>Get real-time updates on available seats.</p>
          </div>
          <div className="col-md-3">
            <h5>💳 Secure Payments</h5>
            <p>100% secure & encrypted payment system.</p>
          </div>
          <div className="col-md-3">
            <h5>🧑‍💼 24/7 Support</h5>
            <p>Our team is here to help you anytime.</p>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers-section container my-5">
        <h2 className="section-title">Featured Offers</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="alert alert-warning">🎉 Get 20% OFF on your first ride!</div>
          </div>
          <div className="col-md-6">
            <div className="alert alert-success">💰 Refer a friend and earn ₹100 cashback!</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="custom-footer bg-dark text-white py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center text-md-start">
        <h5 className="mb-3">Gaddala Varun</h5>
        <p className="mb-1">Full Stack Developer</p>
        <p>© 2025 EasyRide. All rights reserved.</p>
      </div>
      
      <div className="col-md-6 text-center text-md-end">
        <div className="social-links mb-3">
          <a href="https://www.instagram.com/varunnnnn_.x/" target="_blank" rel="noopener noreferrer" 
             className="text-white me-3">
            <i className="bi bi-instagram"></i> Instagram
          </a>
          <a href="https://github.com/gvarun269" target="_blank" rel="noopener noreferrer" 
             className="text-white me-3">
            <i className="bi bi-github"></i> GitHub
          </a>
        </div>
        <div className="contact-info">
          <p className="mb-1">
            <i className="bi bi-envelope me-2"></i> varunchintu2k3@gmail.com
          </p>
          <p className="mb-0">
            <i className="bi bi-phone me-2"></i> +91 7842304676
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Home;

