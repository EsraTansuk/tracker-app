import { GlobalStyles } from "@/constants/styles";
import React, { FC } from "react";
import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";

export interface ExpensesItemProps {
  id: string;
  description: string;
  amount: number;
  date: string;
}

export const ExpensesItem: FC<ExpensesItemProps> = ({
  description,
  amount,
  date,
}) => {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.description, styles.textBase]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
