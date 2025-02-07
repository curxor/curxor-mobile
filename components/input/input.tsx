import React from "react";
import { TextInput, View, Text, Keyboard } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { KeyboardType } from "react-native";

interface InputProps {
  placeholder?: string;
  keyboardType?: KeyboardType;
  onChangeText: (value: string) => void;
  onSubmitEditing?: () => void;
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
  onSubmitEditing,
  value,
  title,
  className,
  iconName,
  length,
}) => {
  const dynamicKeyboardType = typeof value === "number" ? "numeric" : "default";

  return (
    <View className={`mt-2 ${className}`}>
      {title && <Text className="text-sm font-semibold mb-1">{title}</Text>}
      <View className="w-full border-2 pl-2 border-gray-400 flex-row items-center rounded-lg h-12">
        {iconName && <Feather name={iconName} size={25} color="gray" />}
        <TextInput
          maxLength={length}
          className={`w-full h-full  pl-1  focus:outline-none text-black ${className}`}
          onChangeText={(newText) => {
            const parsedValue =
              dynamicKeyboardType === "numeric"
                ? newText.replace(/[^\d]/g, "")
                : newText;
            onChangeText(parsedValue);
          }}
          value={String(value)}
          placeholder={placeholder}
          keyboardType={keyboardType}
          returnKeyType="done"
          onSubmitEditing={() => {
            if (onSubmitEditing) {
              onSubmitEditing();
            }
            Keyboard.dismiss();
          }}
        />
      </View>
    </View>
  );
};

export default Input;
