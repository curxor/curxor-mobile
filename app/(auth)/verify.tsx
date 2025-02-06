import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useAuthVerify } from "@/hooks/auth.hook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View, Text } from "react-native";
import Toast from "react-native-toast-message";
const VerifyScreen = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  const { mutate } = useAuthVerify();
  const [otp, setOtp] = useState<string>("");
  const onChange = (value: string) => {
    setOtp(value);
  };
  const onSubmit = async () => {
    if (!otp) {
      return Toast.show({
        type: "error",
        text1: "OTP is required",
      });
    }
    mutate(
      { email, otp },
      {
        onError: (e: any) => {
          Toast.show({
            type: "error",
            text1: e.response.data.message,
          });
        },
        onSuccess: async (data: any) => {
          await AsyncStorage.setItem("token", data.data.data);
          router.replace({
            pathname: "/(tabs)/home",
            params: { email },
          });
        },
      }
    );
  };
  return (
    <View className="p-2 bg-white h-full">
      <View className="z-10">
        <Toast></Toast>
      </View>
      <Text className="text-center text-4xl mt-5 font-semibold mb-20">
        Curxor
      </Text>
      <Text className="text-center text-md mt-1  ">
        We have sent OTP to your email
      </Text>
      <Text className="text-center text-sm mt-1 font-semibold">{email}</Text>
      <Input
        className="text-center"
        placeholder="OTP"
        onChangeText={onChange}
        value={otp}
      ></Input>
      <Button className="mt-10" onPress={onSubmit} title="Verify"></Button>
    </View>
  );
};

export default VerifyScreen;
