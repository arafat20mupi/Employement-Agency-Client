import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://eurobangla.vercel.app'
    
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;