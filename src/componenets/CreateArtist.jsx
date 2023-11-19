import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


const CreateArtist =()=>{

    const API = import.meta.env.VITE_REACT_API_URL

    const[newArtist,setNewArtist]=useState({

        name:"",
        skills:"",
        genre:"",
        instruments:"",
        independent:"",
        years_of_experience:"",
        record_label:","
     })
const formData={
    name:newArtist.name,
    skills:newArtist.skills,
    genre:newArtist.genre,
    instruments:newArtist.instruments,
    independent:newArtist.instruments,
    years_of_experience:newArtist.years_of_experience,
    record_label:newArtist.record_label
}

     const handlePost=()=>{
       
        const fetchData = async () => {
            try {
              const response = await fetch(`${API}`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
              });
      
              if (!response.ok) {
                throw new Error(`Request failed with the status: ${response.status}`);
              }
      
              const data = await response.json();
              console.log(data);
              
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchData();
    }

    const handeTextChange=(event)=>{

        setNewArtist({...newArtist,[event.target.name]:event.target.value})
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        handlePost()
    }



return (<>
<h1>Create Profile</h1>
<div id="create-form">
<div className='card' >
    <form>
        <label>Artist Name:</label>
        <input type="text" name="name" value={newArtist.name} onChange={handeTextChange}></input><br></br>
        <label>Genre:</label>
            <select type="select" id="genre" name="genre" value={newArtist.genre} onChange={handeTextChange} >
                <option value="Alternative">Alternative</option>
                <option value="Indie">Indie</option>
                <option value="Funk">Funk</option>
                <option value="R&B">R&B</option>
                <option value="Electronic">Electronic</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="Acoustic">Acoustic</option>
                <option value="Jazz">Jazz</option>
                <option value="Soul">Soul </option>
                <option value="Pop">Pop </option>
                <option value="Rock">Rock </option>
             </select><br></br>
             <label>Instruments:</label>
             <input placeholder='instruments/skills' type="text" name="instruments" value={newArtist.instruments} onChange={handeTextChange}></input><br></br>

<label>Indie/Major</label>
                <select id="independent" name="independent" value={newArtist.independent} onChange={handeTextChange} >
                    <option defaultValue="True">True</option>
                    <option defaultValue="False">False</option>

                </select><br></br>
                <label>Experience in Years :</label>
                <input placeholder=' #' type="number" name="years_of_experience" value={newArtist.years_of_experience} onChange={handeTextChange} min="1" max="50"></input><br></br>
                
                <label>Company/Label:</label>
                <input placeholder='Label/Company' type="text" name="record_label" value={newArtist.record_label} onChange={handeTextChange}></input>


    <button id="newProfile">Create Your Profile</button>

    </form>










</div>


</div>
</>)





}
export default CreateArtist