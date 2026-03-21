import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const getAllVehicles = async () => {
  const response = await axios.get(
    `${BASE_URL}/vehicle/details/all`
  );
  return response.data;
};