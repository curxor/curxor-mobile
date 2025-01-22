import Button from "@/components/button/button";
import Input from "@/components/input/input";
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const onChange = (value: string) => {
    console.log(value);
    setEmail(value);
  };
  const onSubmit = () => {};
  return (
    <View className="p-2 bg-white h-full">
      <Image
        source={{
          uri: "https://wallet.pointer.io.vn/assets/auth_img-DqywpUJV.png",
        }}
      ></Image>
      <Text className="text-center text-4xl mt-5 font-semibold mb-20">
        Curxor
      </Text>
      <View className="space-y-10">
        <Input
          placeholder="Email"
          onChangeText={(e: string) => onChange(e)}
          value={email}
        ></Input>
        <Button onPress={() => onSubmit} title="Sign In"></Button>
      </View>
    </View>
  );
};

export default SignInScreen;
