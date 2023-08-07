// ShowList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  

  return (
    <div className="show-list">
      <h1 className="page-header">QuadB Tech</h1>
      <div className="show-cards">
        {shows.map(({ show }) => (
          <div key={show.id} className="show-card">
            <img src={show.image && show.image.medium} alt={show.name}/>
            {console.log(show)}
            <h2 className='movie-name'>{show.name}</h2>
            <div className='info-column'>
                <span>{show.premiered}</span>
                <span>{show.language}</span>
            </div>
            <Link to={`/show/${show.id}`}>
              <button className="view-summary-button">View Summary</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
