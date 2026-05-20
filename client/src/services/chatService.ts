import axios from "axios";

const API =
  "http://127.0.0.1:8000/api/chat";

export const sendChatMessage =
  async (message: string) => {
    const response =
      await axios.post(`${API}/`, {
        message,
      });

    return response.data.response;
  };