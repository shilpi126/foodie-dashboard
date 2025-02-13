import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderStatus, getOrderStatus, updateOrderStatus } from '../store/actions/recipe-action';

const OrderStatus = (props) => {
    const item = props.item;
    const id = props.item.id;
    const dispatch = useDispatch()
    
    const handleUpdateStatus = (status) => {
        
        dispatch(updateOrderStatus({...item,status:status}))
        
    };



    return (
        <div className=" flex  justify-center items-center">


    
    <div>


<button  onClick={() => handleUpdateStatus("perparing")} className="w-20 text-sm h-8 bg-slate-800 m-2 text-white rounded-md">
    Preparing
</button>
<button onClick={() => handleUpdateStatus("delivered")} className="w-20 text-sm h-8 bg-slate-800 m-2 text-white rounded-md">
    Delivered
</button>

<button  onClick={() => handleUpdateStatus("rejected")} className="w-20 text-sm h-8 bg-slate-800 m-2 text-white rounded-md">
    Rejected
</button>
</div>



        <div>
    

        </div>
        </div>
    );
};

export default OrderStatus;
