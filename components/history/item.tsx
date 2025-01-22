import React from "react";
import { Text, View } from "react-native";

const HistoryItem = () => {
  return (
    <View className="bg-white w-full flex-row items-center">
      <Text className="p-2 text-justify rounded-lg flex-row items-center bg-gray-100 w-fit m-2">
        👾
      </Text>
      <View>
        <Text className="font-semibold">Food</Text>
        <Text className="text-sm text-gray-400">20 Feb 2024</Text>
      </View>
      <View className="ml-auto mr-2 text-right">
        <Text className="font-semibold">-5,000$</Text>
        <Text className="ml-auto text-sm text-gray-400">Salad</Text>
      </View>
    </View>
  );
};

export default HistoryItem;
