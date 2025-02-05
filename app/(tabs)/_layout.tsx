import React from "react";
import { Tabs } from "expo-router";
import Feather from "react-native-vector-icons/Feather";
import { Text } from "react-native";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? "#00A6ED" : "gray"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className="font-semibold"
              style={{
                color: focused ? "#00A6ED" : "gray",
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clipboard"
              size={25}
              color={focused ? "#00A6ED" : "gray"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className="font-semibold"
              style={{
                color: focused ? "#00A6ED" : "gray",
              }}
            >
              Transactions
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="message-square"
              size={25}
              color={focused ? "#00A6ED" : "gray"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className="font-semibold"
              style={{
                color: focused ? "#00A6ED" : "gray",
              }}
            >
              Chat
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="archive"
              size={25}
              color={focused ? "#00A6ED" : "gray"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className="font-semibold"
              style={{
                color: focused ? "#00A6ED" : "gray",
              }}
            >
              Categories
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="settings"
              size={25}
              color={focused ? "#00A6ED" : "gray"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className="font-semibold"
              style={{
                color: focused ? "#00A6ED" : "gray",
              }}
            >
              Settings
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
