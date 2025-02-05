import React from "react";
import { TextInput, View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { KeyboardType } from "react-native";

interface InputProps {
  placeholder?: string;
  keyboardType?: KeyboardType;
  onChangeText: (value: string) => void;
  className?: string;
  value: string | number;
  title?: string;
  iconName?: string;
  length?: number;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  keyboardType,
  onChangeText,
  value,
  title,
  className,
  iconName,
  length,
}) => {
  const dynamicKeyboardType = typeof value === "number" ? "numeric" : "default";

  return (
    <View className={className}>
      <Text>{title}</Text>
      <View className="w-full border-[2px] pl-2 border-gray-200 flex-row items-center rounded-2xl h-12">
        {iconName && <Feather name={iconName} size={25} color="gray" />}
        <TextInput
          maxLength={length}
          className={`w-full pl-2 focus:outline-none text-gray-400 ${className}`}
          onChangeText={(newText) => {
            const parsedValue =
              dynamicKeyboardType === "numeric"
                ? newText.replace(/[^\d]/g, "")
                : newText;
            onChangeText(parsedValue);
          }}
          multiline={true}
          value={String(value)}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;
