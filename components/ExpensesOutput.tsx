import React, { FC } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "@/constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "New Shoes",
    amount: 99.99,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    description: "Toilet Paper",
    amount: 5.99,
    date: new Date(2021, 7, 15),
  },
  {
    id: "e3",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 7, 16),
  },
  {
    id: "e4",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 7, 17),
  },
  {
    id: "e5",
    description: "New Desk (Glass)",
    amount: 500,
    date: new Date(2021, 7, 18),
  },
  {
    id: "e6",
    description: "New Desk (Metal)",
    amount: 400,
    date: new Date(2021, 7, 19),
  },
  {
    id: "e7",
    description: "New Desk (Plastic)",
    amount: 300,
    date: new Date(2021, 7, 20),
  },
  {
    id: "e8",
    description: "New Desk (Cardboard)",
    amount: 200,
    date: new Date(2021, 7, 21),
  },
  {
    id: "e9",
    description: "New Desk (Paper)",
    amount: 100,
    date: new Date(2021, 7, 22),
  }
];

export interface ExpensesOutputProps {
  expenses: any;
  expensesPeriod: string;
}

export const ExpensesOutput: FC<ExpensesOutputProps> = ({
  expenses,
  expensesPeriod,
}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  
});
