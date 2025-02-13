import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRecipe, getRecipeData } from '../store/actions/recipe-action'

const RecipesPage = () => {
    const data = useSelector((state)=>state.recipe.recipeData)
    const dispatch = useDispatch()

    console.log(data)

    useEffect(()=>{
        dispatch(getAllRecipe())
    },[])


  return (
    <div className='flex flex-wrap justify-evenly p-8 w-[100%] h-[100%]'>

    {data && data?.map((item,index)=>(
        <div key={item.id} className='w-80 h-80 mb-8 shadow-md shadow-slate-700  rounded-md p-6'>
            <img src={item.images} className='rounded-md mb-2 h-44 w-[100%]'/>
            <p>Title : {item.title}</p>
            <p>Category : {item.category}</p>
            <p>Ingredient : {item.ingredient}</p>
            <p>Price : {item.price}</p>
            
            
        </div>
    ))}
</div>
  )
}

export default RecipesPage