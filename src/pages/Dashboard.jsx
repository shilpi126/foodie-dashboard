import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import FormComponent from '../components/FormComponent'


const Dashboard = () => {
  return (
    <div>
        <Header />
        <div className='flex '>
        <Sidebar/>
        <div className='w-[80%] h-screen flex  flex-col items-center'>
          <FormComponent/>
          
        </div>
        </div>
    </div>
  )
}

export default Dashboard