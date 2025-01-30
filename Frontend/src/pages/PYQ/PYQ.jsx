import React from 'react'
import PYQHead from '../../components/PYQHead'
import { Outlet} from 'react-router'

const PYQ = () => {

  return (
    <div className="lg:w-[85%] md:w-[85%] lg:ml-[15%] md:ml-[15%] flex-col justify-center items-center">
      <PYQHead />
      <Outlet />
    </div>
  )
}

export default PYQ