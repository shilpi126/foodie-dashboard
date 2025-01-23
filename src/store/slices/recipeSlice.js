import { createSlice } from "@reduxjs/toolkit";



const recipeSlice = createSlice({
    name:"recipe",
    initialState:{
        recipes:[],
    },
    reducers:{
        getRecipeCategory(state, action){
            state.recipes=[]
        const data = action.payload
        for(let key in data){
            state.recipes.push({
            id:key,
            category:data[key].category,
            images:data[key].images,
            
            

            })
        }
        }
    }
})


export const recipeAction = recipeSlice.actions


export default recipeSlice