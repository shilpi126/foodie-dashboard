import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteCategory, deleteRecipeCategory, editRecipeCategory, getAllRecipe, getRecipeCategoryData } from '../store/actions/recipe-action'
import EditCategoryForm from './EditCategoryForm'
import { recipeAction } from '../store/slices/recipeSlice'

const CategoryPage = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [editData, setEditData]=useState({})
    const data = useSelector((state)=>state.recipe.recipeCate)
    //console.log(data)
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getRecipeCategoryData())
    },[])


    const handleEdit = ({id,item}) => {
        setEditData({id,item})

        setIsEdit(true)

        //console.log(id,item)
        
    
    }

    const handleDelete = (e) => {
        const id = e.target.id;
        
        dispatch(deleteCategory(id))
        dispatch(recipeAction.deleteRecipeCategory(id))
    }


  return (

    <div className='flex flex-wrap justify-evenly p-8 w-[100%] h-screen'>
        {isEdit && <EditCategoryForm data={editData}/>}
        {!isEdit && data?.map((item,index)=>(
            <div key={item.id} className='w-80 h-80  shadow-md shadow-slate-600 mb-8 rounded-md p-4'>
                <img src={item.images} className='rounded-md mb-2 h-48 w-[100%]'/>
                
                <p className='text-center text-lg uppercase font-medium'>{item.category}</p>
               <div className='flex'>
               <button   onClick={()=>{handleEdit({id:item.id,item})} } className='h-8 w-40 bg-slate-900 text-white m-2 rounded-md'>Edit</button>
               <button id={item.id} onClick={handleDelete} className='h-8 w-40 bg-slate-900 text-white m-2 rounded-md'>Delete</button>
               </div>
            </div>
        ))}
    </div>
  )
}

export default CategoryPage