import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { z } from "zod";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";
import { useSignIn } from "@/hooks/auth.hook";
const emailSchema = z.string().email({ message: "Invalid email address" });

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const { mutate } = useSignIn();
  const router = useRouter();
  const onChange = (value: string) => {
    setEmail(value);
  };

  const onSubmit = () => {
    try {
      emailSchema.parse(email);
    } catch (e) {
      if (e instanceof z.ZodError) {
        Toast.show({
          type: "error",
          text1: "Invalid email address",
        });
      }
    }
    mutate(email, {
      onError: (e: any) => {
        Toast.show({
          type: "error",
          text1: e.response.data.message,
        });
      },
      onSuccess: () => {
        router.push({
          pathname: "/(auth)/verify",
          params: { email },
        });
      },
    });
    console.log(email);
  };

  return (
    <View className="p-2 bg-white h-full">
      {/* <Image
        source={{
          uri: "https://wallet.pointer.io.vn/assets/auth_img-DqywpUJV.png",
        }}
        style={{ width: "100%", height: 100 }}
      /> */}
      <View className="z-10">
        <Toast></Toast>
      </View>
      <Text className="text-center z-0 text-4xl mt-5 font-semibold mb-20">
        Curxor
      </Text>
      <View className="space-y-10">
        <Input
          iconName="user"
          placeholder="Email"
          onChangeText={onChange}
          value={email}
        />
        <Button onPress={onSubmit} title="Sign In" />
      </View>
    </View>
  );
};

export default SignInScreen;
