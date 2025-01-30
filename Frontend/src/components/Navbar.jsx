import React from 'react'
import homeIconLine from '../assets/home-4-line.svg';
import user from '../assets/profile-img.jpeg';
import laptop from '../assets/macbook-line.svg';
import notes from '../assets/file-line.svg'
import pyq  from '../assets/file-list-3-line.svg'  
import alumniIcon from '../assets/alumni-icon.svg'   

import { Link, NavLink } from 'react-router';


const Navbar = () => {
  return (
    <div className='z-10 bg-[#005B41] lg:bg-transparent md:bg-transparent shadow shadow-gray-400 text-white lg:flex lg:flex-col md:flex-col lg:h-screen md:h-screen w-full lg:w-[15%] md:w-[15%] lg:p-4 px-4 py-2 fixed bottom-0'>
        <div className='hidden lg:block md:block'><Link to="/">JUMCA</Link></div>
        <div className='lg:mt-16 md:mt-14'>
            <ul className='flex justify-between lg:flex-col md:flex-col lg:justify-center gap-4'>
                <li>
                    <NavLink to="/" className={({isActive}) => `flex flex-col lg:flex-row lg:justify-normal md:flex-row md:justify-normal md:gap-4 justify-center items-center lg:gap-8 hover:bg-[#008170] ${isActive ? 'bg-[#008170]' : 'bg-transparent'} hover:cursor-pointer lg:px-4 lg:py-2 md:px-2 md:py-1 px-1 py-1 rounded`}>
                        <img src={homeIconLine} className='w-7 lg:w-8'/> 
                        <span className='text-xs lg:text-lg'>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/notes" className={({isActive}) => `flex flex-col lg:flex-row lg:justify-normal md:flex-row md:justify-normal md:gap-4 justify-center items-center lg:gap-8 hover:bg-[#008170] ${isActive ? 'bg-[#008170]' : 'bg-transparent'} hover:cursor-pointer lg:px-4 lg:py-2 md:px-2 md:py-1 px-1 py-1 rounded`}>
                        <img src={notes} className='w-7 lg:w-8'/> 
                        <span className='text-xs lg:text-lg'>Notes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/pyq" className={({isActive}) => `flex flex-col lg:flex-row lg:justify-normal md:flex-row md:justify-normal md:gap-4 justify-center items-center lg:gap-8 hover:bg-[#008170] ${isActive ? 'bg-[#008170]' : 'bg-transparent'} hover:cursor-pointer lg:px-4 lg:py-2 md:px-2 md:py-1 px-1 py-1 rounded`}>
                        <img src={pyq} className='w-7 lg:w-8'/> 
                        <span className='text-xs lg:text-lg'>PYQs</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/interview" className={({isActive}) => `flex flex-col lg:flex-row lg:justify-normal md:flex-row md:justify-normal md:gap-4 justify-center items-center lg:gap-8 hover:bg-[#008170] ${isActive ? 'bg-[#008170]' : 'bg-transparent'} hover:cursor-pointer lg:px-4 lg:py-2 md:px-2 md:py-1 px-1 py-1 rounded`}>
                    <img src={laptop} className='w-7 lg:w-8'/> 
                    <span className='text-xs lg:text-lg'>Interview</span>
                    </NavLink>
                </li>
                <li>    
                    <NavLink to="/alumni" className={({isActive}) => `flex flex-col lg:flex-row lg:justify-normal md:flex-row md:justify-normal md:gap-4 justify-center items-center lg:gap-8 hover:bg-[#008170] ${isActive ? 'bg-[#008170]' : 'bg-transparent'} hover:cursor-pointer lg:px-4 lg:py-2 md:px-2 md:py-1 px-1 py-1 rounded`}>                  
                    <img src={alumniIcon} className='w-7 lg:w-8 '/> 
                    <span className='text-xs lg:text-lg'>Alumni</span>
                    </NavLink> 
                </li>
                <li>    
                    <NavLink to="/profile" className={({isActive}) => `flex flex-col lg:flex-row lg:justify-normal md:flex-row md:justify-normal md:gap-4 justify-center items-center lg:gap-8 hover:bg-[#008170] ${isActive ? 'bg-[#008170]' : 'bg-transparent'} hover:cursor-pointer lg:px-4 lg:py-2 md:px-2 md:py-1 px-1 py-1 rounded`}>                  
                    <img src={user} className='w-7 lg:w-8 rounded-full border-2 border-transparent ring-1 ring-white'/> 
                    <span className='text-xs lg:text-lg'>Profile</span>
                    </NavLink> 
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;