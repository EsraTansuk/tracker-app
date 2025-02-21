import { Tabs } from "expo-router";
import React from "react";
import { GlobalStyles } from "@/constants/styles";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recent-expenses"
        options={{
          title: "Recent",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="clock.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="all-expenses"
        options={{
          title: "All",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="list.bullet" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
