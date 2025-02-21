import { Image, StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AllExpensesScreen, ManageExpensesScreen, RecentExpensesScreen } from "@/screens";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="AllExpenses" component={AllExpensesScreen} />
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpensesScreen} />
    </BottomTabs.Navigator>
  );
}

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen name="ManageExpenses" component={ManageExpensesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});