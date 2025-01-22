import HistoryItem from "@/components/history/item";
import Total from "@/components/statictis/total";
import React from "react";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <View className="bg-white p-4">
        <Text className="font-semibold text-xl">Overview</Text>
      </View>
      <View className="flex-row justify-center">
        <Total name="Total Balance" value={5000000}></Total>
        <Total name="Total Expensive" value={500000}></Total>
      </View>

      <View className="bg-white p-2 rounded-xl">
        <Text className="font-semibold">Latest Entries</Text>
        <HistoryItem></HistoryItem>
        <HistoryItem></HistoryItem>
        <HistoryItem></HistoryItem>
      </View>
    </View>
  );
};

export default HomeScreen;
