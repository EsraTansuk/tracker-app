import React, { FC } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Shoes",
    amount: 99.99,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 5.99,
    date: new Date(2021, 7, 15),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 7, 16),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 7, 17),
  },
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
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={DUMMY_EXPENSES} />
      <ExpensesList />
    </View>
  );
};
