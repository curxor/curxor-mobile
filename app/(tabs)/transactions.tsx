import React, { useState } from "react";
import { View, Text } from "react-native";
import HistoryItem from "@/components/history/item";
import Button from "@/components/button/button";
import { useGetTransactions } from "@/hooks/transaction.hook";

const TransactionScreen = () => {
  const { data, isLoading } = useGetTransactions();
  return (
    <View className="bg-white h-full">
      <View className="bg-white p-4 flex-row">
        <Text className="font-semibold text-xl">History</Text>
        <Button className="ml-auto w-fit h-fit" title="+"></Button>
      </View>
      {!isLoading &&
        data.data.map((item: any) => (
          <HistoryItem
            key={item._id}
            _id={item._id}
            amount={item.amount}
            createdAt={item.createdAt}
            type={item.category.name}
            description={item.description}
            icon={item.category.icon}
          ></HistoryItem>
        ))}
    </View>
  );
};

export default TransactionScreen;
