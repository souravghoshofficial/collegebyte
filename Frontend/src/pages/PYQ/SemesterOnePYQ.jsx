import React, { useState } from 'react'
import {downArrow , upArrow} from '../Index'


const SemesterOnePYQ = () => {

  const onButtonClick = () => {
      const pdfUrl = "http://localhost:5173/C-CT-A.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "document.pdf"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  const[showContent1 , setShowContent1] = useState(false)
  const[showContent2 , setShowContent2] = useState(false)
  const[showContent3 , setShowContent3] = useState(false)
  const[showContent4 , setShowContent4] = useState(false)
  const[showContent5 , setShowContent5] = useState(false)

  const toogleArrow1 = () => {
    setShowContent1(!showContent1)
  }
  const toogleArrow2 = () => {
    setShowContent2(!showContent2)
  }
  const toogleArrow3 = () => {
    setShowContent3(!showContent3)
  }
  const toogleArrow4 = () => {
    setShowContent4(!showContent4)
  }
  const toogleArrow5 = () => {
    setShowContent5(!showContent5)
  }
 
  return (
    <div className=' lg:w-[55%] md:w-[60%] w-[90%] m-auto pb-24 px-3'>
        <div className='semester-head'>
            <h1 className='text-white text-center text-lg lg:text-xl md:text-xl'>First Semester PYQs</h1>
        </div>
        <div className='semester-body w-full grid grid-cols-1 gap-4 mt-4'>
            <div className='subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded'> 
                <div className='cursor-pointer flex items-center justify-between' onClick={toogleArrow1}>
                    <div>
                        <h1 className='block lg:hidden'>Programming Fund. and OPP</h1>
                        <h1 className='hidden lg:block'>Programming Fundamentals and Object Oriented Concepts</h1>
                    </div>
                    <div>
                        <img src={showContent1 ? upArrow : downArrow}  className='w-4 h-4 hover:cursor-pointer '/>
                    </div>
                </div>
                <div className={`mt-2 ${showContent1 ? "block" : "hidden"}`}>
                    <div>
                        <hr className='my-3'/>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>C Notes</h3>
                            </div>
                            <div>
                                <button onClick={onButtonClick} className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>C++ Notes</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded'>
                <div className='cursor-pointer flex items-center justify-between'>
                    <div>
                        <h1>Mathematical Foundations</h1>
                    </div>
                    <div>
                        <img src={showContent2 ? upArrow : downArrow} onClick={toogleArrow2} className='w-4 h-4 hover:cursor-pointer '/>
                    </div>
                </div>
                <div className={`mt-2 ${showContent2 ? "block" : "hidden"}`}>
                    <div>
                        <hr className='my-3'/>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>Linear Algebra</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>Abstract Algebra</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded'>
                <div className='cursor-pointer flex items-center justify-between' onClick={toogleArrow3}>
                    <div>
                        <h1>Management Information Systems</h1>
                    </div>
                    <div>
                        <img src={showContent3 ? upArrow : downArrow}  className='w-4 h-4 hover:cursor-pointer '/>
                    </div>
                </div>
                <div className={`mt-2 ${showContent3 ? "block" : "hidden"}`}>
                    <div>
                        <hr className='my-3'/>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>MIS - I</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>MIS - II</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded'>
                <div className='cursor-pointer flex items-center justify-between' onClick={toogleArrow4}>
                    <div>
                        <h1>Digital Systems</h1>
                    </div>
                    <div>
                        <img src={showContent4 ? upArrow : downArrow} className='w-4 h-4 hover:cursor-pointer '/>
                    </div>
                </div>
                <div className={`mt-2 ${showContent4 ? "block" : "hidden"}`}>
                    <div>
                        <hr className='my-3'/>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>Combitational Circuit</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>Sequential Circuit</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded'>
                <div className='cursor-pointer flex items-center justify-between' onClick={toogleArrow5}>
                    <div>
                        <h1>Graph Theory and Combinatorics</h1>
                    </div>
                    <div>
                        <img src={showContent5 ? upArrow : downArrow} onClick={toogleArrow5} className='w-4 h-4 hover:cursor-pointer '/>
                    </div>
                </div>
                <div className={`mt-2 ${showContent5 ? "block" : "hidden"}`}>
                    <div>
                        <hr className='my-3'/>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>Graph Theory</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>Combinatorics</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SemesterOnePYQ