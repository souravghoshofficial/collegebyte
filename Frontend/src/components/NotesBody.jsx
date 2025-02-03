import React from 'react'
import { Link } from 'react-router'
import notesIconOne from '../assets/notes-icon-1.jpeg'
import notesIconTwo from '../assets/notes-icon-2.jpeg'
import notesIconThree from '../assets/notes-icon-3.jpeg'
import notesIconFour from '../assets/notes-icon-4.jpeg'
import Card from './Card'


const NotesBody = () => {


  return (
    <div className=' lg:w-[55%] md:w-[60%] w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8 m-auto pb-24'>
          <Card id="sem-1" semester="Semester - I" imgSrc={notesIconOne} desc="First Semester Notes" btnText="Get Notes" linkAddress="semester-1" />
          <Card id="sem-2" semester="Semester - II" imgSrc={notesIconTwo} desc="Second Semester Notes" btnText="Get Notes" linkAddress="semester-2" />
          <Card id="sem-3" semester="Semester - III" imgSrc={notesIconThree} desc="Third Semester Notes" btnText="Get Notes" linkAddress="semester-3" />
          <Card id="sem-4" semester="Semester - IV" imgSrc={notesIconFour} desc="Fourth Semester Notes" btnText="Get Notes" linkAddress="semester-4" />
      </div>
  )
}

export default NotesBody