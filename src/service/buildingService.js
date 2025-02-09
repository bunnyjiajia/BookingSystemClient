import { axiosInstance } from "../utils/axiosInstance.js";

export const searchBuildings = async (building_name) => {
    try{
        const response = await axiosInstance.get("/building/search",{
            // data : { building_name }
            building_name : building_name
        });
        return response.data.data;
    }catch(error){
        return error.response
    }
}

export const displayBuildings = async () => {
    try{
        const response = await axiosInstance.get("/building/display");
        return response.data.data;
    }catch(error){
        return error.response
    }
}