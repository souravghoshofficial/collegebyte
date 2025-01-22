import React, { useState } from 'react'
import {downArrow , upArrow} from '../Index'


const SemesterFourNotes = () => {

  const onButtonClick = () => {
      const pdfUrl = "http://localhost:5173/C-CT-A.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "document.pdf"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  const[showContent1 , setShowContent1] = useState(false)
  const[showContent2 , setShowContent2] = useState(false)


  const toogleArrow1 = () => {
    setShowContent1(!showContent1)
  }
  const toogleArrow2 = () => {
    setShowContent2(!showContent2)
  }

 
  return (
    <div className='min-h-screen lg:w-[55%] md:w-[60%] w-[90%] m-auto pb-24 px-3'>
        <div className='semester-head'>
            <h1 className='text-white text-center text-lg lg:text-xl md:text-xl'>Fourth Semester Notes</h1>
        </div>
        <div className='semester-body w-full grid grid-cols-1 gap-4 mt-4'>
            <div className='subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1>Seminar</h1>
                    </div>
                    <div>
                        <img src={showContent1 ? upArrow : downArrow} onClick={toogleArrow1} className='w-4 h-4 hover:cursor-pointer '/>
                    </div>
                </div>
                <div className={`mt-2 ${showContent1 ? "block" : "hidden"}`}>
                    <div>
                        <hr className='my-3'/>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>Notes</h3>
                            </div>
                            <div>
                                <button onClick={onButtonClick} className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>Notes</h3>
                            </div>
                            <div>
                                <button className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subject bg-transparent border text-white px-3 lg:px-4 py-3 rounded'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1>Project</h1>
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
                                <h3>Notes</h3>
                            </div>
                            <div>
                                <button onClick={onButtonClick} className='bg-[#27E0B3] text-black px-2 py-1 rounded-full text-sm'>download</button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-2'>
                            <div>
                                <h3>Notes</h3>
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

export default SemesterFourNotes