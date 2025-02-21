import React, { FC } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native";

export interface ExpensesListProps {
  expenses: any;
}

function renderExpensesItem({ itemData }: any) {
  return <Text>{itemData.item}</Text>;
}

export const ExpensesList:FC<ExpensesListProps> = ({ expenses }) => {
  return <FlatList 
    data={expenses} 
    renderItem={renderExpensesItem}
  />;
};
