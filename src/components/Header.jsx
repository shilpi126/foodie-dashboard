import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='h-14 w-screen fixed top-0 z-10 bg-slate-950 text-white pl-4 pt-2 text-2xl'><Link to="/">Dashboard</Link></div>

  )
}

export default Header