import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './index.css'
import Header from './componenets/Header'
import LoginForm from './componenets/LoginForm'
import ShowAllArtist from './componenets/ShowAllArtists'
import UserProfile from './componenets/ArtistProfile'


function App() {
  

  return (
    <>
      <Router>
 
        <Header/>
   


 
        <Routes>

          <Route path="/" element={<LoginForm/>}/>
          <Route path="/allartists" element={<ShowAllArtist/>}/>
          <Route path="allartists/:id" element={<UserProfile/>}/>


       

        </Routes>


  

      </Router>
    </>
  )
}

export default App
