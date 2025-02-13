
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { Link } from 'react-router';
import { editRecipeCategory } from '../store/actions/recipe-action';



const EditCategoryForm = (props) => {
    const id =props.data.id;
    console.log(props)
    const [categoryData, setCategory] = useState({
        category:props.data.item.category,
        images:props.data.item.images,
    })
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
    





const handleChange = async (e) => {
    const { id, value, files } = e.target;
  try{
    if (files && files[0]) {
        const file = files[0];
        console.log(file);
        
    
        const imageUrl = await uploadFileData(file);

        console.log("Uploaded Image URL:", imageUrl);

        setCategory((prevData) => ({
            ...prevData,
            images: imageUrl, 
        }));
        
        
    } else {
        setCategory((prevData) => ({
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
        console.log("=========> ",categoryData)
        
        dispatch(editRecipeCategory({id,categoryData}))

        setCategory({
            category: "",
            images: "", 
        });

        
        document.getElementById("images").value = null;

    }


  

return (
    <React.Fragment>
    <h1 className='text-center m-4 text-xl '>Edit Category</h1>
        
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
            <option value="fast food">Fast Food</option>
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
    <Link to="/category-page">Back</Link>
</form>
</div>

    </React.Fragment>
    )
}

export default EditCategoryForm