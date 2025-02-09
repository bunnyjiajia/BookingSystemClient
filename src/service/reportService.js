import { axiosInstance } from "../utils/axiosInstance.js";

export const addReport = async (reportData) => {
    try{
        const response = await axiosInstance.post(`/report/report`,reportData);
        return response.data
    }catch (error) {
        return error.response
    }
}