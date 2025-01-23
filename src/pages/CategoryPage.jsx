import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteRecipeCategory, editRecipeCategory, getAllRecipe } from '../store/actions/recipe-action'
import EditCategoryForm from './EditCategoryForm'

const CategoryPage = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [editData, setEditData]=useState({})
    const data = useSelector((state)=>state.recipe.recipes)
    console.log(data)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getAllRecipe())
    },[])


    const handleEdit = ({id,item}) => {
        setEditData({id,item})

        setIsEdit(true)

        console.log(id,item)
        
    
    }

    const handleDelete = (e) => {
        const id = e.target.id;

        dispatch(deleteRecipeCategory(id))
    }


  return (

    <div className='flex justify-center p-8 w-[100%] h-[100%]'>
        {isEdit && <EditCategoryForm data={editData}/>}
        {!isEdit && data?.map((item,index)=>(
            <div key={item.id} className='w-80 h-80 border-2 border-slate-600 m-2 rounded-md p-4'>
                <img src={item.images} className='w-[100%] h-[70%] rounded-md'/>
                <p className='text-center text-lg'>{item.category}</p>
               <div className='flex'>
               <button   onClick={()=>{handleEdit({id:item.id,item})} } className='h-8 w-40 bg-slate-700 text-white m-2 rounded-md'>Edit Category</button>
               <button id={item.id} onClick={handleDelete} className='h-8 w-40 bg-slate-700 text-white m-2 rounded-md'>Delete Category</button>
               </div>
            </div>
        ))}
    </div>
  )
}

export default CategoryPage