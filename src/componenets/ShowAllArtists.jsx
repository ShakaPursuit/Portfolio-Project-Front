import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const API = import.meta.env.VITE_REACT_API_URL;

const ShowAllArtist = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
    <div className="container" id="artist">
      <div className="row" id='single-artist'>
        {artists.map((item, index) => (
          <div className="col-md-3" key={item.id} id={item.id}>
            <div className="card">
              <div className="card-body">
                <img className="images" src={`${item.genre}.png`}/>
          <Link to={`/allartists/${item.id}`}> <button id="profile">Link To Profile</button></Link> 
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.skills}</p>
                <p className="card-text">{item.genre}</p>
                <p className="card-text">{item.instruments}</p>
                <p className="card-text">{item.independent}</p>
                <p className="card-text">{item.years_of_experience}</p>
                <p className="card-text">{item.record_label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
}

export default ShowAllArtist;