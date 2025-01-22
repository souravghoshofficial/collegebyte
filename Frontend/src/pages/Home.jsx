import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen lg:w-[85%] lg:ml-[15%] md:w-[85%] md:ml-[15%] lg:mt-0 flex items-center justify-center'>
        <div className='px-2'>
            <h1 className='text-white text-3xl lg:text-7xl text-center font-bold'>Welcome to <span className='text-[#27E0B3]'>CollegeByte<span className='text-white'>.</span></span></h1>
            <h3 className='text-white text-center mt-4 text-lg lg:text-xl'>Connect with your peers, share study notes, and succeed together.</h3>
        </div>
    </div>
  )
}

export default Home