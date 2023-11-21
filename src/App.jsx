import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './index.css'
import Header from './componenets/Header'
import LoginForm from './componenets/LoginForm'
import ShowAllArtist from './componenets/ShowAllArtists'
import UserProfile from './componenets/ArtistProfile'
import CreateArtist from './componenets/CreateArtist'
import EditArtist from './componenets/EditArtist'
import { useState } from 'react'
import ProtectedRoute from './componenets/Authentication'





function App(isLoggedIn) {
  const [isLoggedInn, setIsLoggedInn] = useState(false);
  const logIn = () => {
   
    setIsLoggedInn(true)
  };
  const logOut = () => {
    setIsLoggedInn(false)
    
 

  };
  

  return (
    <>
      <Router>
 
        <Header />
        {isLoggedIn? (
       <button onClick={logOut}>SignOut</button>
     ) : (
       <button onClick={logIn}>SigIn</button>
     )}
   


 
        <Routes>

          <Route path="/" element={<LoginForm />}/>
          <Route path="/allartists"
           element={<ProtectedRoute isLoggedIn={isLoggedIn}>
            <ShowAllArtist/>
           </ProtectedRoute>
          
          }
          />
          <Route path="allartists/:id" element={<UserProfile/>}/>
          <Route path="allartists/:id/edit" element={<EditArtist/>}/>
          <Route path="/create" element={<CreateArtist/>}/>


       

        </Routes>


  

      </Router>
    </>
  )
}

export default App

 