import HistoryItem from "@/components/history/item";
import Balance from "@/components/statictis/balance";
import Total from "@/components/statictis/total";
import React from "react";
import { View, Text, ScrollView } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView className="bg-white">
      <View className="bg-white p-4">
        <Text className="font-semibold text-xl">Overview</Text>
      </View>
      <Balance balance={5000000}></Balance>
      <View className="flex-row justify-center">
        <Total name="Total Balance" value={5000000}></Total>
        <Total name="Total Expensive" value={500000}></Total>
      </View>

      <View className="bg-white p-2 rounded-xl ">
        <Text className="font-semibold">Latest Entries</Text>
        <HistoryItem
          amount={50000}
          createdAt={"15/04/2004"}
          type="Food"
          description="Ăn tô bún bò"
          icon="🔥"
        ></HistoryItem>
        <HistoryItem
          amount={50000}
          createdAt={"15/04/2004"}
          type="Food"
          description="Ăn tô bún bò"
          icon="🐳"
        ></HistoryItem>{" "}
        <HistoryItem
          amount={-50000}
          createdAt={"15/04/2004"}
          type="Food"
          description="Ăn tô bún bò"
          icon="🎟"
        ></HistoryItem>{" "}
        <HistoryItem
          amount={50000}
          createdAt={"15/04/2004"}
          type="Food"
          description="Ăn tô bún bò"
          icon="🥇"
        ></HistoryItem>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
