import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AvailableBuses.css'; // 🔔 Link to new CSS file

const AvailableBuses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from, to, journeyDate } = location.state || {};

  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get("https://bbproject-7b2j.onrender.com/api/buses/search", {
          params: { from, to, journeyDate },
        });
        setBuses(response.data);
      } catch (error) {
        console.error("Error fetching buses:", error);
      } finally {
        setLoading(false);
      }
    };

    if (from && to && journeyDate) {
      fetchBuses();
    } else {
      setLoading(false);
    }
  }, [from, to, journeyDate]);

  return (
    <div className="available-buses-container container py-5">
      <h2 className="title text-center mb-4">
        🚌 Available Buses from <span className="highlight">{from}</span> to <span className="highlight">{to}</span>
      </h2>

      {loading ? (
        <p className="text-center">⏳ Loading buses...</p>
      ) : buses.length === 0 ? (
        <p className="text-danger text-center">❌ No buses found for this route and date.</p>
      ) : (
        <div className="row">
          {buses.map((bus) => (
            <div key={bus._id} className="col-md-6 col-lg-4">
              <div className="bus-card card shadow-sm p-3 mb-4">
                <div className="card-body">
                  <h4 className="bus-name">{bus.name}</h4>
                  <p><strong>🗺 Route:</strong> {bus.from} → {bus.to}</p>
                  <p><strong>📅 Date:</strong> {bus.journeyDate}</p>
                  <p><strong>⏰ Arrival:</strong> {bus.arrivalTime} hrs</p>
                  <p><strong>🕐 Duration:</strong> {bus.totalJourneyTime}</p>
                  <p><strong>🚍 Type:</strong> {bus.type}</p>
                  <p><strong>💺 Total Seats:</strong> {bus.totalSeats} | <strong>Booked:</strong> {bus.bookedSeats.length}</p>
                  <p className="price"><strong>₹{bus.price}</strong></p>
                  <button
                    className="btn btn-book"
                    onClick={() => navigate('/select-seats', { state: { bus } })}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableBuses;

