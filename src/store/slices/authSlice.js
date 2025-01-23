import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");
//console.log(token)


const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoggedIn: token? true : false,
        
    },
    reducers:{
        
    }
})


export default authSlice