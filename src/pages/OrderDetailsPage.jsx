import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderData } from '../store/actions/recipe-action'
import OrderStatus from '../components/OrderStatus'

const OrderDetailsPage = () => {
    const dispatch = useDispatch()
    const orderData = useSelector((state)=>state.recipe.orderData)
    
console.log(orderData)

    useEffect(()=>{
    dispatch(getOrderData())
    
    },[])





return (
    <div>
        
        <div className=' m-8  '>
            
            {orderData?.map((item,i)=>(
            <div key={item.id}  className='mb-8 w-[100%] p-4  border-2 border-slate-500 shadow-md shadow-slate-600 rounded-lg'>
                <div className='border-b-2 border-slate-500 pb-2 '>
                <h1 className={`font-medium capitalize text-center text-md  ${item.status === "delivered" ?"text-green-600" : item.status === "rejected" ? "text-red-600 ":"text-orange-500" }`}>{item.status}...</h1>
          {!(item.status === "delivered" || item.status === "rejected") &&   <OrderStatus item={item}   />}
                </div>
            
                <div  className=' w-[100%] p-2  '>
                    
                <div className=' w-[100%]'>
                    <h2 className='text-slate-900 text-center  text-sm font-semibold'>Cart Data </h2>
                    {item?.cartData?.map((d,i)=>(
                <div className='mb-2 text-sm h-10 p-2  rounded-md bg-slate-800 text-white flex justify-between' key={i+1}>
                    <h3 className=' font-md '>Recipe {i+1} : </h3>
                    <p>Title : {d.title}</p>
                    <p>Price : {d.price}</p>
                    <p>Quantity : {d.quantity}</p>
                    <p>Total : {d.totalPrice}</p>
                    </div>
                ))}</div>

                <div className='text-sm '>
                <h2 className='text-slate-900 text-md font-semibold text-center'>User Data </h2>
                    <div className='flex justify-between bg-slate-800 text-white p-2 rounded-md'>
                    <p>Name : {item?.userData?.name}</p>
                    <p>Mobile : {item?.userData?.phoneNo}</p>
                    <div className=''>Address : 
                    <p>
                    {item?.userData?.address?.houseNo}, 
                    {item?.userData?.address?.city}, 
                    {item.userData?.address?.state},
                    {item.userData?.address?.pincode}
                    </p>
                    </div>
                    <p>Cash On Delivery : {item.userData?.cashOnDelivery ? "Yes" : "No"}</p>
                    
                    </div>
                </div>
            
                </div>
                <div className=' flex justify-center text-sm'><h2 className='text-slate-900  font-semibold mr-2'>Totl Amount :</h2> <p >{item.totalAmount}</p></div>
                

                </div>
                
            ))}
        </div>
        
    </div>
    )
}

export default OrderDetailsPage