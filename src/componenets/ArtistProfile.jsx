import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const API = import.meta.env.VITE_REACT_API_URL;
const UserProfile = () => {

  const [artists, setArtists] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
        console.log(`${API}/${id}`)
      try {
        const response = await fetch(`${API}/${id}`);
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
          
        }
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, [id]);
//   comsole.log(pics)



  return (
    <>
    <div className='container2'>


    <Link to={`/allartists`}>🔙 </Link>
      <div className="container" id="artist">
        <div className="row" id="single-artist">
          
             {

                artists.id && 
                <div className="col-md-3" key={artists.id} id={artists.id}>
                <div className="card">
                  <div className="card-body">
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxyB70rVbnF4eUDtwd1WQQ6noX7sE8ycIiIQ&usqp=CAU'}/>
                <img className='profile-pic' src={`/images/${artists.name}.png`}/>
                    <button id="profile">Connect with Artist<br></br><img id="insta"src="/images/insta.png"/><br></br>
                    <img id="fb"src="/images/fb.png"/><br></br>
                    <img id="tik"src="/images/tik.png"/><br></br>
                    <img id="twit"src="/images/twit.png"/>
                    
                    </button>
                
                    <h5 className="card-title">Artist Name:<br></br>{artists.name}</h5>
                    <p className="card-text">Skills:{artists.skills}</p>
                    <p className="card-text">Genre:{artists.genre}</p>
                    <p className="card-text">Instruments:{artists.instruments}</p>
                    <p className="card-text">Indie/Major:{artists.independent? '💧':'❌'}</p>
                    <p className="card-text">Experience(inYears):{artists.years_of_experience}</p>
                    <p className="card-text">Record Label:{artists.record_label}</p>
                  </div>
                </div>
              </div>
             }
       
               
        </div>
      </div>
      </div>
    </>
  );
};

export default UserProfile;


