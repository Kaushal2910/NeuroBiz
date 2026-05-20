import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/api/chat`;

export const sendChatMessage =
  async (message: string) => {

    const response =
      await axios.post(
        `${API}/`,
        {
          message,
        }
      );

    return response.data.response;
  };

export const getChatHistory =
  async () => {

    const response =
      await axios.get(
        `${API}/history`
      );

    return response.data;
  };