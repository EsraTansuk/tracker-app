import React, { FC } from "react";
import { View, Text } from "react-native";

export interface ExpensesSummaryProps {
  periodName: string;
  expenses: any;
}

export const ExpensesSummary: FC<ExpensesSummaryProps> = ({
  expenses,
  periodName,
}) => {
  const expensesSum = expenses.reduce((sum: number, expense: any) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
