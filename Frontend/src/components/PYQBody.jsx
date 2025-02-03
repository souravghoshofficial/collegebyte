import React from 'react'
import { Link } from 'react-router'
import pyqIcon from '../assets/pyq-img.jpeg'
import pyqSecondIcon from '../assets/pyq-img-2.jpeg'
import Card from './Card'


const PYQBody = () => {
  return (
    <div className=' lg:w-[55%] md:w-[60%] w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8 m-auto pb-24'>

      <Card id="sem-1" semester="Semester - I" imgSrc={pyqIcon} desc="First Semester PYQs" btnText="Get PYQs" linkAddress="semester-1" />
      <Card id="sem-2" semester="Semester - II" imgSrc={pyqSecondIcon} desc="Second Semester PYQs" btnText="Get PYQs" linkAddress="semester-2" />
      <Card id="sem-3" semester="Semester - III" imgSrc={pyqIcon} desc="Third Semester PYQs" btnText="Get PYQs" linkAddress="semester-3" />
      <Card id="sem-4" semester="Semester - IV" imgSrc={pyqSecondIcon} desc="Fourth Semester PYQs" btnText="Get PYQs" linkAddress="semester-4" />
        
    </div>
  )
}

export default PYQBody