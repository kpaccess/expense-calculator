import { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalState';

function Balance() {
  const context = useContext(GlobalContext);
  const { transactions } = context;
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);

  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <div className=" mt-8 uppercase">
      <h4>Your Balance</h4>
      <h1 className=" font-bold text-3xl">${total}</h1>
    </div>
  );
}

export default Balance;
