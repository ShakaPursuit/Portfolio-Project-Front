import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const EditArtist = () => {
    const API = import.meta.env.VITE_REACT_API_URL;
    const { id } = useParams();//using params to target specific index
    const navigate = useNavigate();
  
    const [newArtist, setNewArtist] = useState({
      name: "",
      skills: "",
      genre: "",
      instruments: "",
      independent: Boolean,
      years_of_experience: "",
      record_label: ""
    });// here I am utilizing useState
  
    useEffect(() => {
         const fetchArtistData = async () => {
        try {
          const response = await fetch(`${API}/${id}`);
          if (!response.ok) {
            throw new Error(`Request failed with the status: ${response.status}`);
          }
          const data = await response.json();
          setNewArtist(data);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
  
      fetchArtistData();
    }, [API, id]);
  
    const handlePost = () => {
      const formData = {
        name: newArtist.name,
        skills: newArtist.skills,
        genre: newArtist.genre,
        instruments: newArtist.instruments,
        independent: newArtist.independent,
        years_of_experience: newArtist.years_of_experience,
        record_label: newArtist.record_label
      };
  
      const fetchData = async () => {
        try {
          const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }
          });
  
          if (!response.ok) {
            throw new Error(`Request failed with the status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log(data);
          navigate(`/allartists/${data.id}`);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      };
  
      fetchData();
    };
  
    const handleTextChange = (event) => {
      setNewArtist({ ...newArtist, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handlePost();
    };
  
    return (
      <>
        <Link to="/allartists">
          <button>🔙</button>
        </Link>
        <h1>Edit Profile</h1>
        <div id="create-form">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <label htmlFor='name'>Artist Name:</label>
              <input type="text" name="name" value={newArtist.name} onChange={handleTextChange} />
              <br />
              <label htmlFor='skills'>Skills:</label>
              <input type="text" name="skills" value={newArtist.skills} onChange={handleTextChange} />
              <br />
              <label htmlFor="genre">Genre:</label>
              <select
                // type="select"
                className="genre"
                name="genre"
                value={newArtist.genre}
                onChange={handleTextChange}
              >
                <option value="Alternative">Alternative</option>
                <option value="Indie">Indie</option>
                <option value="Funk">Funk</option>
                <option value="R&B">R&B</option>
                <option value="Electronic">Electronic</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="Acoustic">Acoustic</option>
                <option value="Jazz">Jazz</option>
                <option value="Soul">Soul</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
              </select>
              <br />
              <label htmlFor="instruments">Instruments:</label>
              <input
                placeholder="instruments/skills"
                type="text"
                name="instruments"
                value={newArtist.instruments}
                onChange={handleTextChange}
              />
              <br />
              <label htmlFor="independent">Indie/Major:</label>
              <select
              // type='select'
                id="independent"
                name="independent"
                value={newArtist.independent}
                onChange={handleTextChange}
              >
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
              <br />
              <label htmlFor='years_of_experience'>Experience in Years:</label>
              <input
                placeholder="#"
                type="number"
                name="years_of_experience"
                value={newArtist.years_of_experience}
                onChange={handleTextChange}
                  min="1"
                  max="50"
              />
              <br />
              <label htmlFor='record_label'>Company/Label:</label>
              <input
                  placeholder="Label/Company"
                  type="text"
                  name="record_label"
                  value={newArtist.record_label}
                  onChange={handleTextChange}
              />
              &nbsp;&nbsp;
  
              <button id="editProfile" type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default EditArtist;