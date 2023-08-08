// BookingForm.js
import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
function BookingForm() {
    const { id } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <React.Fragment>
    <h1 className="page-header">QuadB Tech</h1>
    <div className="booking-form-container">
    
      <div className="movie-details">
        <div className="movie-image">
          {/* Replace 'movieImageURL' with the actual URL of the movie image */}
          {show.image && <img src={show.image.medium} alt={show.name} className="show-image" />}
        </div>
        <div className="movie-info">
          <h2>Movie: {show.name}</h2>
        </div>
      </div>
      <div className="form-container">
        <h2>Book Movie Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Book Now
          </button>
        </form>
      </div>
    </div>
    </React.Fragment>);
}

export default BookingForm;
