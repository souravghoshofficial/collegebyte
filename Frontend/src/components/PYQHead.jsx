import React from 'react'
import { useState, useEffect } from 'react'
import searchIcon from  '../assets/search-line.svg'

const PYQHead = () => {

  const [placeholder, setPlaceholder] = useState("OS");

  useEffect(() => {
    let index = 0;
    const texts = ["Digital", "Maths", "Graph"];

    const intervalId = setInterval(() => {
      setPlaceholder(texts[index]);
      index = (index + 1) % texts.length;
    }, 3000);

    return () => clearInterval(intervalId);
  }, []); 


  return (
    
    <div className='w-[80%] mx-auto flex flex-col gap-2 items-center pt-16 pb-8 px-3 lg:py-8'>
        <div className='py-2 mb-1 lg:mb-2'>
            <h1 className='text-white text-2xl lg:text-4xl md:text-2xl font-bold'>Previous Year Questions</h1>
        </div>
        <div className='w-full lg:w-[50%] md:w-[50%] flex items-center'>
            <input type="text" placeholder={`Search for ${placeholder} question paper`} className='h-9 py-2 px-4 rounded-l w-full bg-transparent text-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500'/>
            <img src={searchIcon} className='h-9 w-12 p-2 cursor-pointer bg-[#27E0B3] rounded-r'/>
        </div>
    </div>
  
  )
}

export default PYQHead