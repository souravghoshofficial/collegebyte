import React from 'react'
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';

const Home = () => {
useGSAP(() => {
    gsap.from('#heading', {
      duration: 1,
      delay: 0.5,
      y: 100,
      opacity: 0,
    })

    gsap.from('#sub-1', {
      duration: 1,
      delay: 1,
      y: 100,
      opacity: 0,
    })
    gsap.from('#sub-2', {
      duration: 1,
      delay: 1.5,
      y: 100,
      opacity: 0,
    })
    gsap.from('#sub-3', {
      duration: 1,
      delay: 2,
      y: 100,
      opacity: 0,
    })
})

  return (
    <div className='min-h-screen lg:w-[85%] lg:ml-[15%] md:w-[85%] md:ml-[15%] lg:mt-0 flex items-center justify-center'>
        <div className='px-2'>
            <h1 id='heading' className='text-white text-3xl lg:text-7xl text-center font-bold'>Welcome to <span className='text-[#27E0B3]'>CollegeByte<span className='text-white'>.</span></span></h1>
            <h3 id='subTitle' className='text-white text-center mt-4 text-lg lg:text-xl'><span id='sub-1'>Connect with your peers,</span><span id='sub-2'> share study notes,</span> <span id='sub-3'>and succeed together.</span></h3>
        </div>
    </div>
  )
}

export default Home