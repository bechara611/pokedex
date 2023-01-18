import axios from "axios";
console.log(import.meta.env.VITE_baseBack)
export const axiosInstance = axios.create({
    
    baseURL: import.meta.env.VITE_baseBack
})