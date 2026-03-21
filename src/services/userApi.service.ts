import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const loginUser = async (emailId: string, password: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/login`,
      {
        emailId,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw error.response?.data || { message: "Login failed" };
  }
};