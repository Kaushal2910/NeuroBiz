import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/api/dashboard`;

export const getDashboardStats =
  async () => {
    const response =
      await axios.get(
        `${API}/stats`
      );

    return response.data;
  };