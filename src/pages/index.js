import { useContext } from 'react';

import AddTransaction from '@/components/addTransaction';
import Balance from '@/components/balance';
import IncomeExpense from '@/components/incomeExpenses';
import TransactionList from '@/components/transactionList';

import { GlobalProvider } from '@/context/GlobalState';

export default function Home() {
  return (
    <GlobalProvider className="container mx-auto">
      <h1 className="text-4xl mt-7 text-blue-400">Expense Tracker</h1>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}
