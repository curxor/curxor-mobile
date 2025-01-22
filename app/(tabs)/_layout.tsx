import React from "react";
import { Tabs } from "expo-router";
import HomeScreen from "./home";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="history" />
      <Tabs.Screen name="tracking" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
