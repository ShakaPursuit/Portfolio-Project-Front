import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const API = import.meta.env.VITE_REACT_API_URL;
const UserProfile = () => {

  const [artists, setArtists] = useState({});
  const { id } = useParams();
  const navigate=useNavigate();


  useEffect(() => {
    const fetchData = async () => {
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

  const handleDelete=()=>{
    fetch(`${API}/${id}`,{method:'DELETE'})
    .then((response)=>{
      if(!response.ok){

        throw new Error(`Something did not according to plan!`)
      }
      navigate('/allartists')
    })
    .catch((error)=>{console.log(error)})

    

  }
  const confirmDelete=()=>{

   const reallyDeleteIndex= confirm(`Are you sure you would like to delete your profile`)
    if(reallyDeleteIndex){
   
      handleDelete()
    
    }
  }



  return (
    <>
    <body>
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
                
                {artists.id>15 ?
            <img className='profile-pic' src={`/images/default.png`}/>:  <img className='profile-pic' src={`/images/${artists.name}.png`}/> 
}
                  
                    <button id="profile">Connect with Artist<br></br><a href='https://www.instagram.com/'><img id="insta"src="/images/insta.png"/></a><br></br>
                   <a href='https://www.facebook.com/'> <img id="fb"src="/images/fb.png"/></a><br></br>
                   <a href="https://www.tiktok.com/"> <img id="tik"src="/images/tik.png"/></a><br></br>
                    <a href="https://www.twitter.com/"><img id="twit"src="/images/twit.png"/></a>
                    
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
      <div>
        <button id='delete' onClick={confirmDelete}> Delete Artist Profile</button>
      </div><br></br>
      <div><Link to={`/allartists/${id}/edit`}><button id='delete'> Edit Profile</button></Link></div>
      </body>
    </>
  );
};

export default UserProfile;


