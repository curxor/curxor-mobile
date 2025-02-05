import { getMessagesAPI, sendMessageAPI } from "@/apis/conversation.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IMessage } from "react-native-gifted-chat";

export const useGetMessages = () => {
  return useQuery({
    queryKey: ["get-messages"],
    queryFn: () => getMessagesAPI(),
  });
};
export const useSendMessage = () => {
  return useMutation({
    mutationFn: ({
      text,
      conversationId,
      botId,
    }: {
      text: string;
      conversationId: string;
      botId: string;
    }) => {
      return sendMessageAPI(text, conversationId, botId);
    },
    mutationKey: ["send-msg"],
  });
};
