import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SelectSeats.css";

const SelectSeats = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);

  const isBooked = (seat) => bus.bookedSeats.includes(seat);
  const isSelected = (seat) => selectedSeats.includes(seat);

  const handleSeatClick = (seat) => {
    if (isBooked(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat to continue.");
      return;
    }
    navigate("/passenger-details", {
      state: { bus, selectedSeats },
    });
  };

  const renderSleeperLayout = () => {
    const rows = 5;
    const lowerLeft = Array.from({ length: rows }, (_, i) => `L${i + 1}`);
    const lowerRight = Array.from({ length: rows }, (_, i) => [
      `L${5 + i * 2 + 1}`,
      `L${5 + i * 2 + 2}`,
    ]);

    const upperLeft = Array.from({ length: rows }, (_, i) => `U${15 + i + 1}`);
    const upperRight = Array.from({ length: rows }, (_, i) => [
      `U${15 + 5 + i * 2 + 1}`,
      `U${15 + 5 + i * 2 + 2}`,
    ]);

    return (
      <div className="horizontal-layout">
        {/* Lower Berth Box */}
        <div className="berth-box">
          <h4 className="text-center">Lower Berth</h4>
          <div className="sleeper-layout">
            <div className="column">
              {lowerLeft.map((seat) => (
                <div
                  key={seat}
                  className={`seat ${isBooked(seat) ? "booked" : isSelected(seat) ? "selected" : ""}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </div>
              ))}
            </div>
            <div className="column right-pair">
              {lowerRight.map(([s1, s2]) => (
                <div className="pair" key={s1}>
                  <div
                    className={`seat ${isBooked(s1) ? "booked" : isSelected(s1) ? "selected" : ""}`}
                    onClick={() => handleSeatClick(s1)}
                  >
                    {s1}
                  </div>
                  <div
                    className={`seat ${isBooked(s2) ? "booked" : isSelected(s2) ? "selected" : ""}`}
                    onClick={() => handleSeatClick(s2)}
                  >
                    {s2}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upper Berth Box */}
        <div className="berth-box">
          <h4 className="text-center">Upper Berth</h4>
          <div className="sleeper-layout">
            <div className="column">
              {upperLeft.map((seat) => (
                <div
                  key={seat}
                  className={`seat ${isBooked(seat) ? "booked" : isSelected(seat) ? "selected" : ""}`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </div>
              ))}
            </div>
            <div className="column right-pair">
              {upperRight.map(([s1, s2]) => (
                <div className="pair" key={s1}>
                  <div
                    className={`seat ${isBooked(s1) ? "booked" : isSelected(s1) ? "selected" : ""}`}
                    onClick={() => handleSeatClick(s1)}
                  >
                    {s1}
                  </div>
                  <div
                    className={`seat ${isBooked(s2) ? "booked" : isSelected(s2) ? "selected" : ""}`}
                    onClick={() => handleSeatClick(s2)}
                  >
                    {s2}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSeaterLayout = () => {
    const seats = Array.from({ length: 40 }, (_, i) => `S${i + 1}`);
    return (
      <div className="seater-layout">
        <div className="row">
          {seats.map((seat) => (
            <div
              key={seat}
              className={`seat ${isBooked(seat) ? "booked" : isSelected(seat) ? "selected" : ""}`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container select-seats-page mt-5">
      <h2 className="mb-4 text-center">🪑 Select Your Seats</h2>
      {bus?.type === "Sleeper" ? renderSleeperLayout() : renderSeaterLayout()}

      <div className="mt-4 mb-3 text-center">
        <h5>Selected Seats: {selectedSeats.join(", ") || "None"}</h5>
        <button className="btn btn-success mt-3" onClick={handleProceed}>
           Passenger Details
        </button>
      </div>
    </div>
  );
};

export default SelectSeats;







