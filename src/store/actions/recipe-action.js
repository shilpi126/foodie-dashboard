import axios from "axios"
import { recipeAction } from "../slices/recipeSlice";
const API = "https://recipe-bee4a-default-rtdb.firebaseio.com";
const user = localStorage.getItem("uid")



export const createRecipe = (data) => {
    return async(dispatch) => {

        const create = async() =>{
            const response = await axios.post(`${API}/recipe/recipes.json`,
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



export const getRecipeCategoryData = (data) => {
    return async(dispatch) => {

        const getRecipe = async() =>{
            const response = await axios.get(`${API}/recipe/category.json`
                
            )
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
            const response = await axios.get(`${API}/recipe/recipes.json`)
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await getRecipe()
            console.log(data)
            dispatch(recipeAction.getRecipeData(data))
        }catch(error){
            console.log(error.message)

        }

    }
}




export const editRecipeCategory = (data) => {
    const {id, categoryData} = data;
    console.log(id,categoryData)
    return async(dispatch) => {

        const editCategory = async() =>{
            const response = await axios.patch(`${API}/recipe/category/${id}.json`,
            categoryData
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


export const deleteCategory = (id) => {
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
            //dispatch(recipeAction.deleteRecipeCategory(id))
        }catch(error){
            console.log(error.message)

        }

    }
}





export const getOrderData = (data) => {
    return async(dispatch) => {

        const getOrder = async() =>{
            const response = await axios.get(`${API}/recipe/order/${user}.json`
                
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const data = await getOrder()
            console.log(data)
            dispatch(recipeAction.getUserOrder(data))
        }catch(error){
            console.log(error.message)

        }

    }
}







export const updateOrderStatus = (data) => {
    const {id} = data;
    
    //console.log(data, id)
    return async(dispatch) => {

        const update = async() =>{
            const response = await axios.patch(`${API}/recipe/order/${user}/${id}.json`,
                data
            )
            const res = response.data;
            console.log(res)
            return res;
        }
        try{
            const result = await update()
            console.log(result)
            dispatch(recipeAction.updateStatus({id,status:data.status}))
            

        }catch(error){
            console.log(error.message)

        }

    }
}







