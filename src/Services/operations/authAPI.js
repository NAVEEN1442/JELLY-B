import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { endpoint } from "../apis"
import { setLoading, setToken } from "../../slices/authSlice"



const {
    SIGNUP_API,
    LOGIN_API,
    OTP_API,
    CHANGE_PASSWORD_API,
} = endpoint


export function signUp(email, password, confirmPassword, otp, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
           
            const response = await apiConnector("POST", SIGNUP_API, {
                email,
                password,
                confirmPassword,
                otp,
            });
          
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("SignUp Successful");
            navigate("/login");
        } catch (error) {
           
            toast.error(`${error}`);
            navigate("/signup");
        }
        dispatch(setLoading(false))
    toast.dismiss(toastId)
    };
};

export function logIn(email,password,navigate){
    return async(dispatch) =>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))

        try {
            
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            });
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("LogIN Successful");
            dispatch(setToken(response.data.token))
            // console.log(response.data.token)
            localStorage.setItem("token",JSON.stringify(response.data.token))

            navigate("/");


        } catch (error) {
         
            toast.error(`${error}`);
            navigate("/login");
        }
        dispatch(setLoading(false))
    toast.dismiss(toastId)
    }
}

export function sendotp(email,navigate){
    return async(dispatch) =>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))

        const response = await apiConnector("POST",OTP_API,{
            email,
        })
        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("Otp Sent: Check Your Gmail");
        navigate("/verifyEmail",{state:{email}});



        
        dispatch(setLoading(false))
    toast.dismiss(toastId)
    }
}

export function logout(navigate){
    return (dispatch)=>{
        dispatch(setToken(null))
        localStorage.removeItem("token")
        toast.success("Logged Out")
        navigate("/")
    }
}

export function resetPassword(email,navigate){

    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))

        try {   

            
            const response = await apiConnector("POST",CHANGE_PASSWORD_API,{email})



        } catch (error) {
            
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)

    }
    
}
