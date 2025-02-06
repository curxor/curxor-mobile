import axiosInstance from "@/services/axios";
export const getMessagesAPI = async () => {
  const response = await axiosInstance.post("/conversation/get-messages", {
    botId: "679f670cfb66611953fa9e44",
  });
  return response.data.data;
};

export const sendMessageAPI = async (
  text: string,
  conversationId: string,
  botId: string
) => {
  const response = await axiosInstance.post("/conversation/send-message", {
    text,
    conversationId,
    botId,
  });
  return response.data.data;
};
