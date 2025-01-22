import React from 'react'
import { Link } from 'react-router'
import notesIconOne from '../assets/notes-icon-1.jpeg'
import notesIconTwo from '../assets/notes-icon-2.jpeg'
import notesIconThree from '../assets/notes-icon-3.jpeg'
import notesIconFour from '../assets/notes-icon-4.jpeg'


const NotesBody = () => {
  return (
    <div className=' lg:w-[55%] md:w-[60%] w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8 m-auto pb-24'>
          <div className=' text-white px-3 py-5 flex flex-col justify-center gap-4 items-center'>
              <div className='bg-[#171717] rounded-lg'>
                <div className='notes-image'>
                  <img src={notesIconOne} alt="notes icon" className='rounded-t-lg'/>
                </div>
                <div className='notes-body px-4 py-6'>
                  <h2 className='text-xl'>Semester I</h2>
                  <p className='text-sm text-[#24CFA6]'>First semsester notes</p>
                </div>
              </div>
              <div className='w-full'>
                <Link to="/notes/semester-1">
                  <button className='px-3 py-2 bg-[#27E0B3] text-black font-bold rounded-lg shadow-black shadow text-sm w-full'>Get Notes</button>
                </Link>
              </div>
          </div>
          <div className=' text-white px-3 py-5 flex flex-col justify-center gap-4 items-center'>
              <div className='bg-[#171717] rounded-lg'>
                <div className='notes-image'>
                  <img src={notesIconTwo} alt="notes icon" className='rounded-t-lg'/>
                </div>
                <div className='notes-body px-4 py-6'>
                  <h2 className='text-xl'>Semester II</h2>
                  <p className='text-sm text-[#24CFA6]'>Second semsester notes</p>
                </div>
              </div>
              <div className='w-full'>
              <Link to="/notes/semester-2">
                    <button className='px-3 py-2 bg-[#27E0B3] text-black font-bold rounded-lg shadow-black shadow text-sm w-full'>Get Notes</button>
               </Link>
              </div>
          </div>
          <div className=' text-white px-3 py-5 flex flex-col justify-center gap-4 items-center'>
              <div className='bg-[#171717] rounded-lg'>
                <div className='notes-image'>
                  <img src={notesIconThree} alt="notes icon" className='rounded-t-lg'/>
                </div>
                <div className='notes-body px-4 py-6'>
                  <h2 className='text-xl'>Semester III</h2>
                  <p className='text-sm text-[#24CFA6]'>Third semsester notes</p>
                </div>
              </div>
              <div className='w-full'>
              <Link to="/notes/semester-3">
                  <button className='px-3 py-2 bg-[#27E0B3] text-black font-bold rounded-lg shadow-black shadow text-sm w-full'>Get Notes</button>
              </Link>
              </div>
          </div>
          <div className=' text-white px-3 py-5 flex flex-col justify-center gap-4 items-center'>
              <div className='bg-[#171717] rounded-lg'>
                <div className='notes-image'>
                  <img src={notesIconFour} alt="notes icon" className='rounded-t-lg'/>
                </div>
                <div className='notes-body px-4 py-6'>
                  <h2 className='text-xl'>Semester IV</h2>
                  <p className='text-sm text-[#24CFA6]'>Forth semsester notes</p>
                </div>
              </div>
              <div className='w-full'>
              <Link to="/notes/semester-4">
                  <button className='px-3 py-2 bg-[#27E0B3] text-black font-bold rounded-lg shadow-black shadow text-sm w-full'>Get Notes</button>
              </Link>
              </div>
          </div>
          
      </div>
  )
}

export default NotesBody