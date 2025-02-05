import React from "react";
import { View, Text } from "react-native";
interface CategoryProps {
  name: string;
  icon: string;
}
const Category: React.FC<CategoryProps> = ({ name, icon }) => {
  return (
    <View className="p-4 pt-2 w-fit">
      <Text className="p-2 w-10 h-10 text-center mx-auto rounded-full flex-row items-center bg-gray-100  mr-2">
        {icon}
      </Text>
      <Text className="font-semibold text-sm">{name} </Text>
    </View>
  );
};

export default Category;
