import { GlobalStyles } from "@/constants/styles";
import React, { FC } from "react";
import { FlatList, Text } from "react-native";
import { StyleSheet } from "react-native";
import { ExpensesItem, ExpensesItemProps } from "./ExpensesItem";

export interface ExpensesListProps {
    expenses: any;
}

function renderExpensesItem({ item }: { item: ExpensesItemProps }) {
  return <ExpensesItem {...item} />;
}

export const ExpensesList: FC<ExpensesListProps> = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
