import React from 'react'

import boxArrow from '../assets/box-arrow.svg'

const Footer = () => {
  return (
    <div className='w-full lg:w-[85%] lg:ml-[15%] md:w-[85%] md:ml-[15%]'>
      <div className='py-32 lg:pb-8 md:pb-10 text-white'>
        <hr className='w-[90%] m-auto lg:w-[95%]' />
        <div className='w-[90%] lg:w-[95%] m-auto px-2 py-4 lg:py-8'>
          <h2 className='text-2xl font-bold tracking-wide leading-5'>Made With ❤️</h2>
          <h2 className='text-2xl font-bold tracking-wide'>In <span className='text-transparent bg-clip-text bg-gradient-to-t from-green-600 via-white to-orange-600'>India</span></h2>
          <h4 className='text-lg mt-2 leading-5'>Design & Develop</h4>
          <h4 className='text-lg flex items-center gap-2'>
            <span>By</span>
            <a href="https://www.linkedin.com/in/abhijit-rabidas" target='_blank'><span className='cursor-pointer flex items-center gap-1 text-[#24CFA6]'>Abhijit <img src={boxArrow} className='w-3'/></span></a> 
            <span>&</span>
            <a href="https://www.linkedin.com/in/souravghosh121" target='_blank'><span className='cursor-pointer flex items-center gap-1 text-[#24CFA6]'>Sourav <img src={boxArrow} className='w-3'/></span></a>
          </h4>
        </div>
        <hr className='w-[90%] m-auto lg:w-[95%]' />
        <div className='w-[90%] m-auto lg:w-[95%] mt-2'>
          <h5 className='text-center text-sm'>&#xA9; CollegeByte | All rights reserved</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer