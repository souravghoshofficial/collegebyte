import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div id='top-nav' className='w-full px-5 py-3 text-white backdrop-blur-sm font-mono flex items-center justify-between fixed top-0 lg:hidden md:hidden'>
        <div className='cursor-pointer'>
          <Link to='/'>JUMCA</Link>
        </div>
        <div className='cursor-pointer'>Items</div>
    </div>
  )
}

export default Header

