import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'

import Login from './pages/Login.jsx'
import Landing  from './pages/Landing.jsx'
import Signup from './pages/Signup.jsx';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Notes from './pages/Notes/Notes.jsx';
import PYQ from './pages/PYQ.jsx';
import Interview from './pages/Interview.jsx';
import Profile from './pages/Profile.jsx'
import Alumni from './pages/Alumni.jsx';
import NotesBody from './components/NotesBody.jsx';
import SemesterOneNotes from './pages/Notes/SemesterOneNotes.jsx';
import SemesterTwoNotes from './pages/Notes/SemesterTwoNotes.jsx';
import SemesterThreeNotes from './pages/Notes/SemesterThreeNotes.jsx';
import SemesterFourNotes from './pages/Notes/SemesterFourNotes.jsx';





createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
     <Routes>
     
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route exact path="/" element={<App />} >
        <Route path='' element={<Home/>}/>
        <Route path='notes' element={<Notes/>} >
          <Route path='' element={<NotesBody />}></Route>
          <Route path='semester-1' element={<SemesterOneNotes />} />
          <Route path='semester-2' element={<SemesterTwoNotes />} />
          <Route path='semester-3' element={<SemesterThreeNotes />} />
          <Route path='semester-4' element={<SemesterFourNotes />} />
        </Route>
        <Route path='pyq' element={<PYQ/>}/>
        <Route path='interview' element={<Interview/>}/>
        <Route path='alumni' element={<Alumni/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
 
)
