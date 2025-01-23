import React from 'react'
import { Link } from 'react-router'

const Sidebar = () => {
  return (
    <React.Fragment>
        <ul className='w-[20%] h-screen bg-slate-700 text-white p-4'>
            <li>Admin</li>
            <li ><Link to="/category">Create Category Foem</Link></li>
            <li ><Link to="/categorypage">Category Page</Link></li>
        </ul>
    </React.Fragment>
  )
}

export default Sidebar