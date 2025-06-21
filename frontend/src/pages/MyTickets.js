import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MyTickets.css";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickets = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please log in to view your tickets.");
        return;
      }

      try {
        const response = await axios.get("https://bbproject-7b2j.onrender.com/api/bookings/my-tickets", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTickets(response.data);
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError("Failed to fetch tickets. Please try again later.");
      }
    };

    fetchTickets();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="tickets-container">
      <div className="tickets-header">
        <h2>Your Tickets</h2>
        <button 
          className="home-button"
          onClick={() => navigate("/userhome")}
        >
          Back to Home
        </button>
      </div>
      
      {tickets.length === 0 ? (
        <div className="no-tickets">
          <p>No tickets booked yet.</p>
        </div>
      ) : (
        <div className="tickets-grid">
          {tickets.map((ticket) => {
            console.log("Ticket Data:", ticket); // Debug log for each ticket
            return (
              <div className="ticket-card" key={ticket._id}>
                <div className="ticket-header">
                  <h4>PNR: {ticket.PNR}</h4>
                  <span className="status-badge">Confirmed</span>
                </div>
                
                <div className="ticket-route">
                  <span className="route-city">{ticket.from}</span>
                  <span className="route-arrow">→</span>
                  <span className="route-city">{ticket.to}</span>
                </div>
                
               <div className="ticket-details">
             <p><strong>Bus:</strong> {ticket.busId?.name || "N/A"}</p>
             <p><strong>Seats:</strong> <span className="seats">{ticket.selectedSeats.join(", ")}</span></p>
              </div>
                
                <div className="passengers-section">
                  <strong>Passengers:</strong>
                  {ticket.passengers.map((p, idx) => (
                    <div className="passenger" key={idx}>
                      {p.name}, Age: {p.age}, Gender: {p.gender}, Mobile: {p.mobile || p.phone}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyTickets;