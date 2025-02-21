import { ExpensesOutput } from '@/components'
import React from 'react'
import { Text } from 'react-native'

export const RecentExpensesScreen = () => {
  return (
    <ExpensesOutput expenses={[]} expensesPeriod="Recent Expenses" />
  )
}
