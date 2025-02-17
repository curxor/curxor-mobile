import { router } from "expo-router";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <View className="p-2 flex-row items-center bg-white">
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name={"arrowleft"} size={25} color="black" />
      </TouchableOpacity>
      <Text className="text-lg font-semibold mx-auto">{title}</Text>
      <View className="w-[25px]">{children}</View>
    </View>
  );
};

export default Header;
