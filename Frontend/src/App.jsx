import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider, useAuth } from './AuthContext';

import './index.css'

import Login from "./pages/Login.jsx";
import Landing from "./pages/Landing.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import Notes from "./pages/Notes/Notes.jsx";
import PYQ from "./pages/PYQ/PYQ.jsx";
import Interview from "./pages/Interview.jsx";
import Profile from "./pages/Profile.jsx";
import Alumni from "./pages/Alumni.jsx";
import NotesBody from "./components/NotesBody.jsx";
import SemesterOneNotes from "./pages/Notes/SemesterOneNotes.jsx";
import SemesterTwoNotes from "./pages/Notes/SemesterTwoNotes.jsx";
import SemesterThreeNotes from "./pages/Notes/SemesterThreeNotes.jsx";
import SemesterFourNotes from "./pages/Notes/SemesterFourNotes.jsx";
import Layout from './Layout.jsx';
import PYQBody from "./components/PYQBody.jsx";
import SemesterOnePYQ from "./pages/PYQ/SemesterOnePYQ.jsx";

    

const App = () => {
  return (

    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="notes" element={<Notes />}>
            <Route path="" element={<NotesBody />}></Route>
            <Route path="semester-1" element={<SemesterOneNotes />} />
            <Route path="semester-2" element={<SemesterTwoNotes />} />
            <Route path="semester-3" element={<SemesterThreeNotes />} />
            <Route path="semester-4" element={<SemesterFourNotes />} />
          </Route>
          <Route path="pyq" element={<PYQ />} >
            <Route path="" element ={<PYQBody />}/>
            <Route path="semester-1" element ={<SemesterOnePYQ />}/>
          </Route>
          <Route path="interview" element={<Interview />} />
          <Route path="alumni" element={<Alumni />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>

  );
}

export default App;

  {/* // // Conditional rendering for "/"
  // const ConditionalRoute = () => {
  //   const { isAuthenticated } = useAuth();
  //   return isAuthenticated ? <Layout /> : <Landing />;
  // }; */}