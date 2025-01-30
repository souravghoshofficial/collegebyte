import React from 'react'
import { Link } from 'react-router'

import menuIcon from '../assets/menu.svg'

const Header = () => {
  return (
    <div id='top-nav' className='z-10 w-full px-6 py-3 text-white backdrop-blur-sm font-mono flex items-center justify-between fixed top-0 lg:hidden md:hidden'>
        <div className='cursor-pointer'>
          <Link to='/'>JUMCA</Link>
        </div>
        <div className='cursor-pointer'>
          <img src={menuIcon} className='w-6'/>
        </div>
    </div>
  )
}

export default Header

