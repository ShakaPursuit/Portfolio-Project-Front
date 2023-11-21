import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './componenets/Header'
import LoginForm from './componenets/LoginForm'
import ShowAllArtist from './componenets/ShowAllArtists'
import UserProfile from './componenets/ArtistProfile'
import CreateArtist from './componenets/CreateArtist'
import EditArtist from './componenets/EditArtist'

import ProtectedRoute from './componenets/Authentication'


import { Link } from 'react-router-dom'




function App(isLoggedIn) {

  return (
    <>
      <Router>

        <Header />
        {/* {isLoggedIn ? (
          <Link to={`/`}> <button id='sign-out' >SignOut</button></Link>
        ) : (
          <button >SignIn</button>
        )} */}

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/allartists"
            element={<ProtectedRoute isLoggedIn={isLoggedIn}>
              <ShowAllArtist />
            </ProtectedRoute>

            }
          />
          <Route path="allartists/:id" element={<UserProfile />} />
          <Route path="allartists/:id/edit" element={<EditArtist />} />
          <Route path="/create" element={<CreateArtist />} />




        </Routes>




      </Router>
    </>
  )
}

export default App

