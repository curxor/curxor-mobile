import { Stack } from "expo-router";
import React from "react";

export default function TransactionLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="transaction" />
      <Stack.Screen name="add-category" />
    </Stack>
  );
}
