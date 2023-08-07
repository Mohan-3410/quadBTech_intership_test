// ShowSummary.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


function ShowSummary() {
  const { id } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  return (
    <div className="show-summary">
      <div className="header-container">
        <h1>{show.name}</h1>
        <Link to={`/booking/${show.id}`}>
          <button className="btn btn-primary">Book Movie Ticket</button>
        </Link>
      </div>
      <div className="details-container">
        <div className="image-container">
          {show.image && <img src={show.image.medium} alt={show.name} className="show-image" />}
        </div>
        <div className="detail-info">
          <p><strong>Schedule Time:</strong> {show.schedule && show.schedule.time}</p>
          <p><strong>Schedule Date:</strong> {show.schedule && show.schedule.days.join(', ')}</p>
          <p><strong>Genres:</strong> {show.genres && show.genres.join(', ')}</p>
          <p><strong>Rating:</strong> {show.rating && show.rating.average}</p>
        </div>
      </div>
      <div className="summary-container">
        <h2>Summary</h2>
        <p>{show.summary}</p>
      </div>
    </div>
  );
}

export default ShowSummary;
