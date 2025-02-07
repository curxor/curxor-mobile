import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
interface ButtonProps {
  onPress?: () => void;
  title: string;
  className?: string;
  isLoading: boolean;
}
const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  className,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      className={`w-full bg-blue-400 rounded-2xl ${className}`}
      onPress={onPress}
    >
      {!isLoading ? (
        <Text className="text-white font-semibold text-center p-[14px] ">
          {title}
        </Text>
      ) : (
        <View className="animate-spin p-[14px] mx-auto">
          <AntDesign name={"loading2"} size={16} color="white" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
