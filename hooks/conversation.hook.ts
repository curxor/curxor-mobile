import { getMessagesAPI, sendMessageAPI } from "../apis/conversation.api";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetMessages = () => {
  return useQuery({
    queryKey: ["get-messages"],
    queryFn: () => getMessagesAPI(),
  });
};
export const useSendMessage = () => {
  return useMutation({
    mutationFn: (data: {
      text: string;
      conversationId: string;
      botId: string;
      file: any;
    }) => {
      return sendMessageAPI(data);
    },
    mutationKey: ["send-msg"],
  });
};
