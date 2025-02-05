import axios from "axios";
import { IMessage } from "react-native-gifted-chat";

export const getMessagesAPI = async () => {
  const response = await axios.post(
    `http://192.168.1.102:8888` + "/api/v1/conversation/get-messages",
    { botId: "679f670cfb66611953fa9e44" },
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllNDMzNjFmYjYyMDA2NWIzN2E5NzMiLCJlbWFpbCI6Im1pbmhuZ3V5ZW4xMWExY21nQGdtYWlsLmNvbSIsImlhdCI6MTczODQyNTM2MiwiZXhwIjoxNzM5NzIxMzYyfQ.mb_G0BtXpheAO-y5xwTTF6ALRMyCz9AGlJXwdnSQIgE",
      },
    }
  );
  return response.data.data;
};
export const sendMessageAPI = async (
  text: string,
  conversationId: string,
  botId: string
) => {
  const response = await axios.post(
    `http://192.168.1.102:8888` + "/api/v1/conversation/send-message",
    { text, conversationId, botId },
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzllNDMzNjFmYjYyMDA2NWIzN2E5NzMiLCJlbWFpbCI6Im1pbmhuZ3V5ZW4xMWExY21nQGdtYWlsLmNvbSIsImlhdCI6MTczODQyNTM2MiwiZXhwIjoxNzM5NzIxMzYyfQ.mb_G0BtXpheAO-y5xwTTF6ALRMyCz9AGlJXwdnSQIgE",
      },
    }
  );
  return response.data;
};
