import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { createRecipe } from '../store/actions/recipe-action';
const initialData =  {
        title:"",
        ingredient:"",
        price:"",
        category:"",
        images:"",
        
    }

    

const FormComponent = () => {
    const [imagePreviews, setImagePreviews] = useState("");
    const [recipeData, setRecipeData] = useState(initialData)
    const dispatch = useDispatch()

    const uploadFileData = async (file) => {
     try{
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "images-file"); 
        formData.append("cloud_name", "deb3zjo1c");
    
        const response = await fetch("https://api.cloudinary.com/v1_1/deb3zjo1c/image/upload", {
            method: "POST",
            body: formData,
        });
    
        const data = await response.json();
        console.log(data)
        return data.secure_url; 
     }catch(e){
        console.log(e)
     }
    };
    





const handleChange = async(e) => {
  try{
    const { id, value, files } = e.target;
    if (files && files[0]) {
        const file = files[0];
        console.log(file);
        
        
        const imageUrl =  await uploadFileData(file);

        console.log("Uploaded Image URL:", imageUrl);

        setRecipeData((prevData) => ({
            ...prevData,
            images: imageUrl, 
        }));
        
        setImagePreviews(imageUrl); 
    } else {
        setRecipeData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }
  }catch(e){
    console.log(e)
  }
};


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(recipeData)

        dispatch(createRecipe(recipeData))

        setRecipeData({
            title:"",
            price:"",
            ingredient:"",
            category: "",
            images: "", 
        });
        setImagePreviews("");
        document.getElementById("images").value = null;

    }


return (
    <React.Fragment>
    <div className='flex  flex-col   w-[80%] h-[100%] '>
    <h1 className='text-center m-4 text-2xl font-medium text-slate-950 '>Create Recipe</h1>
        

    <form onSubmit={handleFormSubmit} className='p-4 w-[100%] h-[65%] shadow-lg shadow-slate-800 rounded-lg flex flex-wrap justify-between  '>
    
    <div className='h-16 mb-2  w-[45%] '>
        <label htmlFor="title" >Title</label>
        <input
            type="text"
            id="title"
            value={recipeData.title}
            placeholder="Enter Title..."
            onChange={handleChange}
            required
            className="text-black h-10 p-2  outline-none w-[100%] rounded-md border-2 border-slate-300 "
        />
        
    </div>


    <div className='h-16 mb-2 w-[45%]'>
        <label htmlFor="price">Price</label>
        <input
            type="text"
            id="price"
            value={recipeData.price}
            placeholder="Enter Price..."
            onChange={handleChange}
            required
            className="border-2 border-slate-300 p-2 h-10 outline-none w-[100%] rounded-md"
        />
        
    </div>

    <div className='h-16 mb-2 w-[45%]'>
        <label htmlFor="category" >Category</label>
        <select 
        id='category'
        value={recipeData.category}
        onChange={handleChange}
        required
        className="border-2 border-slate-300 h-10 outline-none w-[100%] rounded-md"
        >
            <option value="" disabled>Select Category</option>
            <option value="fast food">Fast Food</option>
            <option value="main courses">Main Courses</option>
            <option value="desserts">Desserts</option>
        </select>
        
    </div>

    <div className='h-16  w-[45%]'>
        <label htmlFor="ingredient">Ingredients</label>
        <input
            type="list"
            id="ingredient"
            value={recipeData.ingredient}
            placeholder="Enter Price..."
            onChange={handleChange}
            required
            className="border-2 border-slate-300 p-2 h-10 outline-none w-[100%] rounded-md"
        />
        
    </div>

    <div className='h-24 mb-2 w-[45%]'>
        <label htmlFor="images" >Recipe Image</label>
        <input
            type="file"
            id="images"
            required
            placeholder="Upload Recipe Images..."
            onChange={handleChange}
            className="border-2 border-slate-300 h-10  outline-none w-[100%] rounded-md"
        />
            
    <div className="text-sm flex">
    <h3>Selected Files:</h3>
    <div className=" mt-2">

        {imagePreviews && <div  className="ml-2 mb-2 ">
            <img
                src={imagePreviews}
                alt="img"
                className="w-16 h-10 rounded-md border-2 border-orange-600"
            />
            </div>}
    
    </div>
    </div>
    </div>
    <button 
        type="submit" 
        className="bg-slate-900 w-[45%] h-10 mt-6 text-center text-xl rounded-md text-white "
    >
        Create recipe
    </button>
    </form>

    </div>
    
    </React.Fragment>
    )
        }


export default FormComponent