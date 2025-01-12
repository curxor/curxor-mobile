import React from "react";
import { Tabs } from "expo-router";
import HomeScreen from "./home";
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="add" />
      <Tabs.Screen name="tracking" />
      <Tabs.Screen name="settings" />
      <Tabs.Screen name="home" />
    </Tabs>
  );
}
