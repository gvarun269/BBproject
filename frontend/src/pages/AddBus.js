import React, { useState } from "react";
import axios from "axios";

const AddBus = () => {
  const cities = ['Hyderabad', 'Bengaluru', 'NITK', 'Vemulawada', 'Vizianagaram', 'Palamaner'];

  const [formData, setFormData] = useState({
    name: "",
    from: "",
    to: "",
    journeyDate: "",
    arrivalTime: "",
    totalJourneyTime: "",
    type: "",
    price: "",
    totalSeats: "",
    bookedSeats: []
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/buses/add", formData);
      alert("Bus added successfully!");
      console.log("Added bus:", res.data);
    } catch (error) {
      console.error("Error adding bus:", error);
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#FFF',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#FB9E3A',
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2rem',
        fontWeight: '600'
      }}>Add a New Bus</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: '600', color: '#555' }}>Bus Name</label>
          <input 
            type="text" 
            name="name" 
            style={{
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.2s'
            }}
            onChange={handleChange} 
            required 
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', color: '#555' }}>From</label>
            <select 
              name="from" 
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                backgroundColor: 'white',
                outline: 'none'
              }}
              onChange={handleChange} 
              required
            >
              <option value="">Select Source</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', color: '#555' }}>To</label>
            <select 
              name="to" 
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                backgroundColor: 'white',
                outline: 'none'
              }}
              onChange={handleChange} 
              required
            >
              <option value="">Select Destination</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', color: '#555' }}>Journey Date</label>
            <input 
              type="date" 
              name="journeyDate" 
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                outline: 'none'
              }}
              onChange={handleChange} 
              required 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', color: '#555' }}>Arrival Time</label>
            <input 
              type="time" 
              name="arrivalTime" 
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                outline: 'none'
              }}
              onChange={handleChange} 
              required 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', color: '#555' }}>Journey Time</label>
            <input 
              type="text" 
              name="totalJourneyTime" 
              placeholder="e.g., 6 hours"
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                outline: 'none'
              }}
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', color: '#555' }}>Bus Type</label>
            <select 
              name="type" 
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                backgroundColor: 'white',
                outline: 'none'
              }}
              onChange={handleChange} 
              required
            >
              <option value="">Select Type</option>
              <option value="Sleeper">Sleeper</option>
              <option value="AC Seater">AC Seater</option>
              <option value="Non AC Seater">Non AC Seater</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', color: '#555' }}>Price (₹)</label>
            <input 
              type="number" 
              name="price" 
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '1rem',
                outline: 'none'
              }}
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: '600', color: '#555' }}>Total Seats</label>
          <input 
            type="number" 
            name="totalSeats" 
            style={{
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '1rem',
              outline: 'none'
            }}
            onChange={handleChange} 
            required 
          />
        </div>

        <button 
          type="submit" 
          style={{
            padding: '1rem',
            backgroundColor: '#FB9E3A',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
            marginTop: '1rem'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#E88C2A'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FB9E3A'}
        >
          Add Bus
        </button>
      </form>
    </div>
  );
};

export default AddBus;

