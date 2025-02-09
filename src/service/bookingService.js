import { axiosInstance } from "../utils/axiosInstance.js";

export const getReserveDetails = async () => {
    try{
        const response = await axiosInstance.get("/booking/reserveDetails");
        return response.data.data;
    }catch(error){
        return error.response
    }
}

export const getAllReserve = async () => {
    try{
        const response = await axiosInstance.get("/booking/displayBooking");
        return response.data.data;
    }catch(error){
        return error.response
    }
}
export const createBooking = async (bookingData) => {
    try{
        const response = await axiosInstance.post(`/booking/booking`,bookingData);
        return response.data
    }catch (error) {
        return error.response
    }
}

export const updateBooking = async (bkReserves) => {
    try {
        // Send a PUT request to update the booking
        const response = await axiosInstance.put(`/booking/updateBooking`, bkReserves);

        if (response.data.success) {
            alert("Booking updated successfully!");
            return response.data; // You can use this data as needed
        } else {
            alert(response.data.message); // Handle conflict or errors from backend
            return response.data;
        }
    } catch (error) {
        console.error("Error updating booking:", error);
        alert("There was an error updating the booking. Please try again.");
        return error.response;
    }
};

export const removeBookking = async (booking_id) => {
    try{
        const response = await axiosInstance.delete(`/booking/removeBooking/${booking_id}`);
        return response.data
    }catch (error) {
        return error.response
    }
}


