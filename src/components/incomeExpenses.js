import { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalState';

function IncomeExpense() {
  const context = useContext(GlobalContext);
  const { transactions } = context;

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) *
    -1;

  return (
    <div className="border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  grid md:grid-cols-2 dark:text-white uppercase divide-x">
      <div className="p-4">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  ">
          Income
        </h4>
        <p className=" text-green-600 ml-4">${income}</p>
      </div>

      <div className="p-4">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
          Expense
        </h4>
        <p className=" text-red-500">${expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
