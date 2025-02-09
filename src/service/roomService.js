import { axiosInstance } from "../utils/axiosInstance.js";

export const searchRooms = async (room_name) => {
  try {
    const response = await axiosInstance.get("/room/search", {
      room_name: room_name,
    });
    // console.log(response);

    return response.data.data;
  } catch (error) {
    return error.response;
  }
};

export const displayRooms = async () => {
  try {
    const response = await axiosInstance.get("/room/display");
    return response.data.data;
  } catch (error) {
    return error.response;
  }
};

export const reserveBuilding = async () => {
  try {
    const response = await axiosInstance.get("/room/reserveBuilding");
    return response.data.data;
  } catch (error) {
    return error.response;
  }
};
