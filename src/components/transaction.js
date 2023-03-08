import { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalState';

function Transaction({ id, amount, text }) {
  const context = useContext(GlobalContext);
  const { deleteTransaction } = context;

  const sign = amount < 0 ? '-' : '+';
  const borderClr = sign === '-' ? 'border-red-600' : 'border-green-600';
  return (
    <li
      key={id}
      className={`group relative mb-5 px-5 py-1 bg-white grid grid-cols-2 border-r-4 ${borderClr}`}
    >
      {text}{' '}
      <span className=" text-right ">
        {sign}${Math.abs(amount)}
      </span>
      <button
        onClick={() => deleteTransaction(id)}
        className="hidden group-hover:block absolute top-1 left-[-15px] bg-red-400 w-5 text-white"
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
