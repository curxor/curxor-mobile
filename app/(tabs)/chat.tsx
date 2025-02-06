import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, IMessage, Send, Message } from "react-native-gifted-chat";
import { launchImageLibrary } from "react-native-image-picker";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useGetMessages, useSendMessage } from "@/hooks/conversation.hook";
import { formatCurrency } from "@/utils/format-currency";
import Transaction from "@/components/history/item";
import ScanScreen from "@/components/button/send-image-with-ocr";
import { useGetProfile } from "@/hooks/auth.hook";

const renderSend = (props: any) => (
  <Send {...props}>
    <View style={{ marginRight: 10, marginBottom: 5 }}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3682/3682321.png",
        }}
        resizeMode="center"
        style={{ width: 20, height: 20 }}
      />
    </View>
  </Send>
);

interface ICustomMessage extends IMessage {
  transaction?: [
    {
      id: string;
      amount: number;
      description: number;
    }
  ];
}

const ChatScreen: React.FC = () => {
  const botUserID = "679f670cfb66611953fa9e44";
  const [messages, setMessages] = useState<ICustomMessage[]>([]);
  const [conversationId, setConversationId] = useState<string>("");
  const [currentUserID, setCurrentUserID] = useState<string>("");

  const [audioRecorder] = useState(new AudioRecorderPlayer());
  const [isBotTyping, setIsBotTyping] = useState(false);
  const { data } = useGetMessages();
  const { data: dataUser } = useGetProfile();
  const { mutate } = useSendMessage();

  useEffect(() => {
    if (data && dataUser) {
      setMessages(data.messages);
      setCurrentUserID(dataUser.user._id);
      setConversationId(data.conversation);
    }
  }, [data, dataUser]);

  const renderMessage = (props: any) => {
    const { currentMessage } = props;
    return (
      <View>
        <Message {...props} />
        {currentMessage.transaction &&
          currentMessage.transaction.map((item: any) => (
            <Transaction
              className="w-[200px]"
              _id={item._id}
              amount={item.amount}
              createdAt={item.createdAt}
              type={"Done"}
              description={item.description}
              icon={"✅"}
            ></Transaction>
          ))}
      </View>
    );
  };

  const onSend = useCallback(
    (newMessages: ICustomMessage[] = []) => {
      const userMessage = newMessages[0]?.text;
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, newMessages)
      );

      setIsBotTyping(true);
      const currentConversationId = conversationId;
      mutate(
        {
          text: userMessage,
          conversationId: currentConversationId,
          botId: botUserID,
        },
        {
          onSuccess: (data) => {
            const replyMessage: ICustomMessage = {
              _id: Math.random().toString(),
              text: data.text || "Bot response",
              createdAt: new Date(),
              user: { _id: botUserID, name: "Bot" },
              transaction: data.transactions,
            };
            setMessages((prevMessages) =>
              GiftedChat.append(prevMessages, [replyMessage])
            );
          },
          onSettled: () => setIsBotTyping(false),
        }
      );
    },
    [conversationId]
  );

  const onSendImage = () => {
    launchImageLibrary(
      { mediaType: "photo", includeBase64: false },
      (response) => {
        if (response.assets?.[0]?.uri) {
          const imageMessage: ICustomMessage = {
            _id: Math.random().toString(),
            text: "",
            createdAt: new Date(),
            user: { _id: currentUserID, name: "Bạn" },
            image: response.assets[0]?.uri,
          };
          setMessages((prevMessages) =>
            GiftedChat.append(prevMessages, [imageMessage])
          );
        }
      }
    );
  };

  return (
    <GiftedChat
      messages={messages}
      renderMessage={renderMessage}
      renderSend={renderSend}
      onSend={(newMessages: ICustomMessage[]) => onSend(newMessages)}
      user={{ _id: currentUserID, name: "Bạn" }}
      renderUsernameOnMessage={true}
      messagesContainerStyle={{ backgroundColor: "#ffffff" }}
      renderAccessory={() => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={onSendImage} style={{ marginRight: 10 }}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/PlusCM128.svg/1200px-PlusCM128.svg.png",
              }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      )}
      alwaysShowSend={true}
      renderFooter={() =>
        isBotTyping ? (
          <Text
            style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
          >
            Typing...
          </Text>
        ) : null
      }
    />
  );
};

export default ChatScreen;
