import React from "react";
import { View } from "react-native";
import "../global.css";
import { Redirect } from "expo-router";
const Index: React.FC = () => {
  return <Redirect href={"/(auth)/sign-in"} />;
};

export default Index;
