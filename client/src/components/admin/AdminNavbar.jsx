import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/nameLogo.svg'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30'>
        <Link to={'/'}>
            <img src={logo} alt="logo" className='w-40 h-auto' />
        </Link>
    </div>
  )
}

export default AdminNavbar