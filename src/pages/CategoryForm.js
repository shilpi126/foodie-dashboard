
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createRecipeCategory } from '../store/actions/recipe-action';
import { Link } from 'react-router';

const initialData =  {
        
        category:"",
        images:"",

    }

const CategoryForm = () => {
    
    const [categoryData, setCategory] = useState(initialData)
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const { id, value, files } = e.target;

        if (id === "images" && files) {
            const selectedFiles = Array.from(files); 
            console.log(selectedFiles, files)
            const previewUrls = selectedFiles.map((file) =>
            URL.createObjectURL(file)
            );
        
        
            setCategory((prevData) => ({
                ...prevData,
                images:[...previewUrls]
                
            }));
            
        }else{
        
        setCategory((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        }

        
    
    };
    


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(categoryData)

        dispatch(createRecipeCategory(categoryData))

        setCategory({
            
            category: "",
            images: "", 
        });

        
        document.getElementById("images").value = null;

    }


return (
    <React.Fragment>
    <h1 className='text-center m-4 text-xl '>Create Category</h1>
        
     <div className='flex justify-center w-[100%] h-[100%] '>
     <form onSubmit={handleFormSubmit} className='p-4 w-[80%] h-[65%] shadow-md shadow-slate-600 rounded-lg flex flex-wrap justify-between  '>
    

    <div className='h-16 mb-2 w-[45%]'>
        <label htmlFor="category" >Category</label>
        <select 
        id='category'
        value={categoryData.category}
        onChange={handleChange}
        className="border-2 border-slate-300 h-10 outline-none w-[100%] rounded-md"
        >
            <option value="" disabled>Select Category</option>
            <option value="appetizers">Appetizers</option>
            <option value="main courses">Main Courses</option>
            <option value="desserts">Desserts</option>
        </select>
        
    </div>



    <div className='h-24 mb-2 w-[45%]'>
        <label htmlFor="images" >Category Image</label>
        <input
            type="file"
            id="images"
            placeholder="Upload Category Image..."
            onChange={handleChange}
            className="border-2 border-slate-300 h-10  outline-none w-[100%] rounded-md"
        />
            
</div>

    <button 
        type="submit" 
        className="bg-slate-700 w-[45%] h-10 mt-6 text-center text-xl rounded-md text-white "
    >Create category</button>
    <Link to="/">Back</Link>
</form>
</div>

    </React.Fragment>
    )
}

export default CategoryForm