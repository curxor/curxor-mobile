import axiosInstance from "@/services/axios";

export const getMessagesAPI = async () => {
  const response = await axiosInstance.post("/conversation/get-messages", {
    botId: "679f670cfb66611953fa9e44",
  });
  return response.data.data;
};

export const sendMessageAPI = async (data: {
  text: string;
  conversationId: string;
  botId: string;
  file: File | null;
}) => {
  const { text, conversationId, botId, file } = data;
  const formData = new FormData();
  formData.append("text", text);
  formData.append("conversationId", conversationId);
  formData.append("botId", botId);

  if (file) {
    console.log(file);
    formData.append("file", file);
  }
  const response = await axiosInstance.post(
    "/conversation/send-message",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data.data;
};
