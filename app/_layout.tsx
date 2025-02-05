import { Stack } from "expo-router";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Toast />
        <Stack>
          <Stack.Screen options={{ headerShown: false }} name="(auth)" />
          <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
          <Stack.Screen options={{ headerShown: false }} name="transactions" />
        </Stack>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
