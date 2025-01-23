import axios from "axios"
const API = "AIzaSyAFmZTPioev5-LxgDaMMrAqtZpDUMCqtds";


export const register = (data) => {
    return async(dispatch) => {

        const registerUser = async() =>{
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`,{
                email:data.email,
                password:data.password,
                returnSecureToken:true,
            })
            const res = response.data;
            console.log(res)
            return res;

        }


        try{
            const data = await registerUser()
            const uid = data?.localId;
            const isAdmin = true;
            localStorage.setItem("uid",uid)
            localStorage.setItem("isAdmin",isAdmin)
            
        }catch(error){
            console.log(error.message)

        }



    }
}



export const login = (data) => {
    return async(dispatch) => {

        const loginUser = async() =>{
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API}`,{
                email:data.email,
                password:data.password,
                returnSecureToken:true,
            })
            //console.log(response.data)
            return response.data;
        }


        try{
            const res = await loginUser()
            //console.log(res)
            localStorage.setItem("token",res.idToken)
            
        }catch(error){
            console.log(error.message)

        }



    }
}



export const forgotPasssword = (data) => {
    return async(dispatch) => {

        const forgotPassswordUser = async() =>{
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API}`,{
                email:data.email,
                requestType: "PASSWORD_RESET"
            })
            
        }


        try{
            await forgotPassswordUser()
            
        }catch(error){
            console.log(error.message)

        }



    }
}