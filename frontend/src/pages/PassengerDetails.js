import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PassengerDetails.css";

const PassengerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, selectedSeats } = location.state || {};

  const [passengers, setPassengers] = useState(
    selectedSeats.map((seat) => ({
      seatNumber: seat,
      name: "",
      age: "",
      phone: "",
      gender: "Male", // default
    }))
  );

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const p of passengers) {
      if (!p.name || !p.age || !p.phone || !p.gender) {
        setError("Please fill all fields for all passengers.");
        return;
      }
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await axios.post("https://bbproject-7b2j.onrender.com/api/bookings/book", {
        busId: bus._id,
        selectedSeats: selectedSeats,
        passengers,
        from: bus.from,
        to: bus.to,
        date: bus.journeyDate,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert("Booking successful! Your PNR is: " + response.data.booking.PNR);
      navigate("/my-tickets", { state: { booking: response.data.booking } });
    } catch (err) {
      console.error("Booking error:", err);
      setError("Booking failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="passenger-details-container">
      <div className="passenger-details-card">
        <h2 className="passenger-details-title">Passenger Details</h2>
        <p className="passenger-details-subtitle">Please enter details for each passenger</p>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          {passengers.map((passenger, index) => (
            <div className="passenger-card" key={index}>
              <div className="passenger-header">
                <span className="seat-badge">Seat: {passenger.seatNumber}</span>
              </div>
              
              <div className="form-group">
                <label htmlFor={`name-${index}`}>Full Name</label>
                <input
                  id={`name-${index}`}
                  type="text"
                  className="form-input"
                  placeholder="Enter full name"
                  value={passenger.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor={`age-${index}`}>Age</label>
                <input
                  id={`age-${index}`}
                  type="number"
                  className="form-input"
                  placeholder="Enter age"
                  value={passenger.age}
                  onChange={(e) => handleChange(index, "age", e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor={`phone-${index}`}>Mobile Number</label>
                <input
                  id={`phone-${index}`}
                  type="tel"
                  className="form-input"
                  placeholder="Enter mobile number"
                  value={passenger.phone}
                  onChange={(e) => handleChange(index, "phone", e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor={`gender-${index}`}>Gender</label>
                <select
                  id={`gender-${index}`}
                  className="form-input"
                  value={passenger.gender}
                  onChange={(e) => handleChange(index, "gender", e.target.value)}
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="submit-button"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <span className="spinner"></span> Processing...
              </>
            ) : (
              "Confirm Booking"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PassengerDetails;




