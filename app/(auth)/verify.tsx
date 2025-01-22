import Button from "@/components/button/button";
import Input from "@/components/input/input";
import React, { useState } from "react";
import { View, Text } from "react-native";
const VerifyScreen = () => {
  const [otp, setOtp] = useState<string>("");
  const onChange = (value: string) => {
    setOtp(value);
  };
  const onSubmit = async () => {
    // await SignUpFirebase(otp, password);
  };
  return (
    <View className="p-2 bg-white h-full">
      <Text className="text-center text-4xl mt-5 font-semibold mb-20">
        Curxor
      </Text>

      <Input
        className="text-center"
        placeholder="OTP"
        onChangeText={onChange}
        value={otp}
      ></Input>
      <Button
        className="mt-10"
        onPress={() => onSubmit}
        title="Verify"
      ></Button>
    </View>
  );
};

export default VerifyScreen;
