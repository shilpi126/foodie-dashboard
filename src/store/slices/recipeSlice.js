import { createSlice } from "@reduxjs/toolkit";


const recipeSlice = createSlice({
    name:"recipe",
    initialState:{
        recipeCate:[],
        orderData:[],
    
        recipeData:[],
    
    },
    reducers:{

    updateStatus(state,action){
        let {id, status} = action.payload
        

        const data = state.orderData.map((item)=> item.id === id ? {...item, status:status} : item)
        state.orderData=data;

    
    },
        
        getUserOrder(state, action){

            console.log(action.payload)
            state.orderData=[]
        const data = action.payload
        for(let key in data){
            
            state.orderData.push({
            id:key,
            cartData:data[key].cartData,
            userData:data[key].userData,
            totalAmount:data[key].totalAmount,
            status:data[key].status,
            

            })
        }
        },





        
        
        getRecipeCategory(state, action){
            state.recipeCate=[]
        const data = action.payload
        for(let key in data){
            state.recipeCate.push({
            id:key,
            category:data[key].category,
            images:data[key].images,
            
            

            })
        }
        },


        deleteRecipeCategory(state, action){
            
        const id = action.payload
        const data = state.recipeCate.filter((item)=>item.id !== id)
        state.recipeCate = data
        },


        getRecipeData(state, action){
            state.recipeData=[]
        const data = action.payload
        for(let key in data){
            state.recipeData.push({
            id:key,
            title:data[key].title,
            category:data[key].category,
            images:data[key].images,
            ingredient:data[key].ingredient,
            price:data[key].price,
            
            
            

            })
        }
        },







    }
})


export const recipeAction = recipeSlice.actions


export default recipeSlice