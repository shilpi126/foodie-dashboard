import React from 'react'
import { Link } from 'react-router'

const Sidebar = () => {
  return (
    <React.Fragment>
        <ul className='w-[20%] h-screen  fixed left-0 top-0 pt-20 bg-slate-900 text-white p-4 '>
            <li className='mb-4 '><Link to="/">Recipes</Link></li>
            <li className='mb-4'><Link to="/create-recipe">Add Recipe</Link></li>
            <li className='mb-4'><Link to="/category">Add Category</Link></li>
            <li className='mb-4'><Link to="/category-page">Category</Link></li>
            <li className='mb-4'><Link to="/order-details">Order Details</Link></li>
        </ul>
    </React.Fragment>
  )
}

export default Sidebar