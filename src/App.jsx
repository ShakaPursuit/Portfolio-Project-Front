import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './index.css'
import Header from './componenets/Header'
import LoginForm from './componenets/LoginForm'
import ShowAllArtist from './componenets/ShowAllArtists'
import UserProfile from './componenets/ArtistProfile'
import CreateArtist from './componenets/CreateArtist'
import EditArtist from './componenets/EditArtist'


function App() {
  

  return (
    <>
      <Router>
 
        <Header/>
   


 
        <Routes>

          <Route path="/" element={<LoginForm/>}/>
          <Route path="/allartists" element={<ShowAllArtist/>}/>
          <Route path="allartists/:id" element={<UserProfile/>}/>
          <Route path="allartists/:id/edit" element={<EditArtist/>}/>
          <Route path="/create" element={<CreateArtist/>}/>


       

        </Routes>


  

      </Router>
    </>
  )
}

export default App
