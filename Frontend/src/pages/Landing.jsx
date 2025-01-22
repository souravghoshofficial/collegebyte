import React from 'react'
import student from "../assets/student.gif"     
import {Link} from "react-router"

const Landing = () => {
  return (
    <div className='w-full h-screen bg-[#233b4f] text-white'>
        <div className=''>
            <ul className='flex justify-between items-center px-8 py-8 lg:px-16'>
                <li className='text-xl font-bold'>JUMCA</li>
                <Link to='/login'><li className='border-black border-2 text-white text-sm px-5 py-1.5 rounded-full hover:bg-white hover:border-white hover:text-black hover:scale-x-105 hover:cursor-pointer hover:font-bold'>Login</li></Link>
            </ul>
        </div>
        <div className='flex flex-col-reverse w-full mt-8 justify-center items-center px-8 py-4 lg:py-0 gap-4 lg:flex-row lg:px-16 lg:justify-between lg:gap-0 lg:mt-0 md:flex-row'>
            <div className=''>
              <h1 className='text-3xl font-bold lg:text-5xl'>Unlock Knowledge Together</h1>
              <p className='mt-4 text-sm lg:text-lg'>A collaborative platform for students to share study notes, question papers, and resources.</p>
            </div>
            <div className='w-full lg:w-1/2 mt-4'>
              <img src={student} alt="student-img" className='scale-110 lg:scale-100'/>
            </div>
        </div>
    </div>
  )
}

export default Landing