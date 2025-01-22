import React from "react";
import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="history" />
      <Tabs.Screen name="budget" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
