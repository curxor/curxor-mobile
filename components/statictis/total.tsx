import React from "react";
import { View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { formatCurrency } from "@/utils/format-currency";
interface TotalProps {
  name: string;
  value: number;
  icon: string;
}
const Total: React.FC<TotalProps> = ({ name, value, icon }) => {
  return (
    <View className="w-[47%]   border border-gray-100 bg-white rounded-lg p-2 m-2">
      <View className="flex-row">
        {icon && <Feather name={icon} size={25} color="gray" />}
        <Text className="mt-1 ml-2">{name}</Text>
      </View>
      <Text
        className={`text-2xl  font-semibold mt-4 ${
          value < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {formatCurrency(value, "VND")}
      </Text>
    </View>
  );
};

export default Total;
