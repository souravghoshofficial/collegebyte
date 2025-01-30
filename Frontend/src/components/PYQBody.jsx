import React from 'react'
import { Link } from 'react-router'
import pyqIcon from '../assets/pyq-img.jpeg'
import pyqSecondIcon from '../assets/pyq-img-2.jpeg'


const PYQBody = () => {
  return (
    <div className=' lg:w-[55%] md:w-[60%] w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8 m-auto pb-24'>
          <div className=' text-white px-3 py-5 flex flex-col justify-center gap-4 items-center'>
              <div className='bg-[#171717] rounded-lg'>
                <div className='notes-image'>
                  <img src={pyqIcon} alt="notes icon" className='rounded-t-lg'/>
                </div>
                <div className='notes-body px-4 py-6'>
                  <h2 className='text-xl'>Semester I</h2>
                  <p className='text-sm text-[#24CFA6]'>First semsester PYQs</p>
                </div>
              </div>
              <div className='w-full'>
                <Link to="/pyq/semester-1">
                  <button className='px-3 py-2 bg-[#27E0B3] text-black font-bold rounded-lg shadow-black shadow text-sm w-full'>Get PYQs</button>
                </Link>
              </div>
          </div>
          <div className=' text-white px-3 py-5 flex flex-col justify-center gap-4 items-center'>
              <div className='bg-[#171717] rounded-lg'>
                <div className='notes-image'>
                  <img src={pyqIcon} alt="notes icon" className='rounded-t-lg'/>
                </div>
                <div className='notes-body px-4 py-6'>
                  <h2 className='text-xl'>Semester II</h2>
                  <p className='text-sm text-[#24CFA6]'>Second semsester PYQs</p>
                </div>
              </div>
              <div className='w-full'>
              <Link to="/pyq/semester-2">
                    <button className='px-3 py-2 bg-[#27E0B3] text-black font-bold rounded-lg shadow-black shadow text-sm w-full'>Get PYQs</button>
               </Link>
              </div>
          </div>
          <div className=' text-white px-3 py-5 flex flex-col justify-center gap-4 items-center'>
              <div className='bg-[#171717] rounded-lg'>
                <div className='notes-image'>
                  <img src={pyqSecondIcon} alt="notes icon" className='rounded-t-lg'/>
                </div>
                <div className='notes-body px-4 py-6'>
                  <h2 className='text-xl'>Semester III</h2>
                  <p className='text-sm text-[#24CFA6]'>Third semsester PYQs</p>
                </div>
              </div>
              <div className='w-full'>
              <Link to="/pyq/semester-3">
                  <button className='px-3 py-2 bg-[#27E0B3] text-black font-bold rounded-lg shadow-black shadow text-sm w-full'>Get PYQs</button>
              </Link>
              </div>
          </div>
          <div className=' text-white px-3 py-5 flex flex-col justify-center gap-4 items-center'>
              <div className='bg-[#171717] rounded-lg'>
                <div className='notes-image'>
                  <img src={pyqSecondIcon} alt="notes icon" className='rounded-t-lg'/>
                </div>
                <div className='notes-body px-4 py-6'>
                  <h2 className='text-xl'>Semester IV</h2>
                  <p className='text-sm text-[#24CFA6]'>Forth semsester PYQs</p>
                </div>
              </div>
              <div className='w-full'>
              <Link to="/pyq/semester-4">
                  <button className='px-3 py-2 bg-[#27E0B3] text-black font-bold rounded-lg shadow-black shadow text-sm w-full'>Get PYQs</button>
              </Link>
              </div>
          </div>
          
      </div>
  )
}

export default PYQBody