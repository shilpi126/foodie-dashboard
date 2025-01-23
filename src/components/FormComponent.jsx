
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createRecipe } from '../store/actions/recipe-action';

const initialData =  {
        title:"",
        ingredient:"",
        price:"",
        category:"",
        images:[],

    }

const FormComponent = () => {
    const [imagePreviews, setImagePreviews] = useState([]);
    const [recipeData, setRecipeData] = useState(initialData)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { id, value, files } = e.target;

        if (id === "images" && files) {
            const selectedFiles = Array.from(files); 
            const previewUrls = selectedFiles.map((file) =>
            URL.createObjectURL(file)
            );
        
            setImagePreviews((prevPreviews) => [...prevPreviews, ...previewUrls]);
        
            setRecipeData((prevData) => ({
                ...prevData,
                images:[...prevData.images,...previewUrls]
                
            }));
            
        }else{
        
        setRecipeData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        }

        
    
    };
    


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(recipeData)

        dispatch(createRecipe(recipeData))

        setRecipeData({
            
            category: "",
            images: "", 
        });

        setImagePreviews([]);
        document.getElementById("images").value = null;

    }


return (
    <React.Fragment>
    <h1 className='text-center m-4 text-xl '>Create Recipe</h1>
        
     <div className='flex justify-center w-[100%] h-[100%] '>
     <form onSubmit={handleFormSubmit} className='p-4 w-[80%] h-[65%] shadow-md shadow-slate-600 rounded-lg flex flex-wrap justify-between  '>
    
    <div className='h-16 mb-2  w-[45%] '>
        <label htmlFor="title" >Title</label>
        <input
            type="text"
            id="title"
            value={recipeData.title}
            placeholder="Enter Title..."
            onChange={handleChange}
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
            className="border-2 border-slate-300 p-2 h-10 outline-none w-[100%] rounded-md"
        />
        
    </div>

    <div className='h-16 mb-2 w-[45%]'>
        <label htmlFor="category" >Category</label>
        <select 
        id='category'
        value={recipeData.category}
        onChange={handleChange}
        className="border-2 border-slate-300 h-10 outline-none w-[100%] rounded-md"
        >
            <option value="" disabled>Select Category</option>
            <option value="appetizers">Appetizers</option>
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
            className="border-2 border-slate-300 p-2 h-10 outline-none w-[100%] rounded-md"
        />
        
    </div>

    <div className='h-24 mb-2 w-[45%]'>
        <label htmlFor="images" >Recipe Image</label>
        <input
            type="file"
            id="images"
            placeholder="Upload Recipe Images..."
            onChange={handleChange}
            className="border-2 border-slate-300 h-10  outline-none w-[100%] rounded-md"
        />
            
    <div className="text-sm flex">
    <h3>Selected Files:</h3>
    <div className=" mt-2">
        {imagePreviews && imagePreviews.map((url, index) => (
            <div key={index} className="ml-2 mb-2 ">
            <img
                src={url}
                alt="img"
                className="w-16 h-10 rounded-md border-2 border-orange-600"
            />
            </div>
        ))}
    </div>
    </div>
</div>

    <button 
        type="submit" 
        className="bg-slate-700 w-[45%] h-10 mt-6 text-center text-xl rounded-md text-white "
    >Create recipe</button>
</form>
</div>

    </React.Fragment>
    )
}

export default FormComponent