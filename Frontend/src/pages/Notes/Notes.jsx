import React from 'react'
import NotesHead from '../../components/NotesHead'
import { Outlet} from 'react-router'

const Notes = () => {

  return (
    <div className="lg:w-[85%] md:w-[85%] lg:ml-[15%] md:ml-[15%] flex-col justify-center items-center">
      <NotesHead />
      <Outlet />
    </div>
  )
}

export default Notes