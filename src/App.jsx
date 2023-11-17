import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './index.css'
import Header from './componenets/Header'
import LoginForm from './componenets/LoginForm'
import ShowAllArtist from './componenets/ShowAllArtists'


function App() {
  

  return (
    <>
      <Router>
 
        <Header/>
   
        <body>

 
        <Routes>

          <Route path="/" element={<LoginForm/>}/>
          <Route path="/allartists" element={<ShowAllArtist/>}/>


       

        </Routes>


  
        </body>
      </Router>
    </>
  )
}

export default App
