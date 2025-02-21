import { ExpensesOutput } from '@/components'
import React from 'react'

export const AllExpensesScreen = () => {
  return (
    <ExpensesOutput expenses={[]} expensesPeriod="All Expenses" />
  )
}
