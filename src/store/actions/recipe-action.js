import axios from "axios"
import { recipeAction } from "../slices/recipeSlice";
const API = "https://recipe-bee4a-default-rtdb.firebaseio.com";


export const createRecipe = (data) => {
    return async(dispatch) => {

        const create = async() =>{
            const response = await axios.post(`${API}/recipe.json`,
                data
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await create()
            console.log(data)
        }catch(error){
            console.log(error.message)

        }

    }
}


export const createRecipeCategory = (data) => {
    return async(dispatch) => {

        const createCategory = async() =>{
            const response = await axios.post(`${API}/recipe/category.json`,
                data
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await createCategory()
            console.log(data)
        }catch(error){
            console.log(error.message)

        }

    }
}



export const getAllRecipe = (data) => {
    return async(dispatch) => {

        const getRecipe = async() =>{
            const response = await axios.get(`${API}/recipe/category.json`)
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await getRecipe()
            console.log(data)
            dispatch(recipeAction.getRecipeCategory(data))
        }catch(error){
            console.log(error.message)

        }

    }
}


export const editRecipeCategory = (id,data) => {
    return async(dispatch) => {

        const editCategory = async() =>{
            const response = await axios.patch(`${API}/recipe/category/${id}.json`,
                data
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await editCategory()
            console.log(data)
        }catch(error){
            console.log(error.message)

        }

    }
}


export const deleteRecipeCategory = (id) => {
    return async(dispatch) => {

        const deleteItem = async() =>{
            const response = await axios.delete(`${API}/recipe/category/${id}.json`,
                
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await deleteItem()
            console.log(data)
        }catch(error){
            console.log(error.message)

        }

    }
}