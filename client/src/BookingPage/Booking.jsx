import React from 'react';
import './Booking.css';

const Booking = () => {

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert('Booking successful!'); // Shows the alert message
  };

  return (
    <div className="booking-container">
      <h1>EVENT INFORMATION</h1>
      
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name *</label>
          <input type="text" placeholder="First Name*" required />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>

        <div className="form-group">
          <label>Approximate Budget *</label>
          <input type="text" placeholder="Approximate Budget*" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
        </div>

        <div className="form-group">
          <label>Event Date *</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>Event Type</label>
          <select>
            <option>Select Event Type</option>
            <option>Wedding</option>
            <option>Reception</option>
            <option>Engagement</option>
            <option>Haldi</option>
            <option>Pre-Wedding</option>
          </select>
        </div>

        <div className="form-group">
          <label>Number of Attendees</label>
          <input type="number" placeholder="Number of Attendees" />
        </div>

        <div className="form-group">
          <label>Event Location</label>
          <input type="text" placeholder="Event Location" />
        </div>

        <div className="form-group full-width">
          <label>Comments</label>
          <textarea placeholder="Tell Us About Your Event"></textarea>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
