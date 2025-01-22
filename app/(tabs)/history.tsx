import HistoryItem from "@/components/history/item";
import React from "react";
import { View, Text } from "react-native";

const HistoryScreen = () => {
  return (
    <View className="bg-white h-full">
      <View className="bg-white p-4">
        <Text className="font-semibold text-xl">History</Text>
      </View>
      <HistoryItem
        icon="🥇"
        amount={50000}
        createdAt={"15/04/2004"}
        type="Food"
        description="Ăn tô bún bò"
      ></HistoryItem>
      <HistoryItem
        icon="🥇"
        amount={50000}
        createdAt={"15/04/2004"}
        type="Food"
        description="Ăn tô bún bò"
      ></HistoryItem>
      <HistoryItem
        icon="🥇"
        amount={-50000}
        createdAt={"15/04/2004"}
        type="Food"
        description="Ăn tô bún bò"
      ></HistoryItem>
    </View>
  );
};

export default HistoryScreen;
