import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const loginUser = async (emailId: string, password: string) => {
  try {
    
    // const response = await axios.post(
    //   `${BASE_URL}/user/login`,
    //   {
    //     emailId,
    //     password,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

let response = {"data" :{
  "success": true,
  "message": "Login successful",
  "data": {
      "id": "69be5c9f1edbbf0b157c4919",
      "employeeId": "R00999",
      "firstName": "Venkat",
      "lastName": "Kandhan",
      "emailId": "boss2@gmail.com",
      "accessRole": "admin",
      "isActive": true
  }
}
}


    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Login failed" };
  }
};