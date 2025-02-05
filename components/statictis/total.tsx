import React from "react";
import { View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { formatCurrency } from "@/utils/format-currency";
interface TotalProps {
  name: string;
  value: number;
}
const Total: React.FC<TotalProps> = ({ name, value }) => {
  return (
    <View className="w-[47%]  border border-gray-100 bg-white rounded-lg p-2 m-2">
      <Feather name={"shield"} size={25} color="gray" />
      <Text className="mt-1">{name}</Text>
      <Text className="text-2xl font-semibold mt-4">
        {formatCurrency(value, "VND")}
      </Text>
    </View>
  );
};

export default Total;
