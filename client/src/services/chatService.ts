import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/api/chat`;


export const sendChatMessage =
  async (
    message: string,
    file?: File | null
  ) => {

    const formData = new FormData();

    formData.append(
      "message",
      message
    );


    if (file) {

      formData.append(
        "file",
        file
      );
    }


    const response =
      await axios.post(
        `${API}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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