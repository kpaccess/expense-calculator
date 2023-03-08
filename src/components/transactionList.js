import { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalState';
import Transaction from './transaction';

function TransactionList() {
  const context = useContext(GlobalContext);
  const { transactions } = context;

  return (
    <div className="mt-10">
      <h3 className="font-bold border-b-2 border-gray-200">History</h3>

      <ul id="list" className="pt-5 ">
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} {...transaction} />;
        })}
      </ul>
    </div>
  );
}

export default TransactionList;
