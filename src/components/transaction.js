function Transaction({ id, amount, text }) {
  const sign = amount < 0 ? '-' : '+';
  console.log(sign);
  const borderClr = sign === '-' ? 'border-red-600' : 'border-green-600';
  return (
    <li
      key={id}
      className={`mb-5 px-5 py-1 bg-white grid grid-cols-2 border-r-4 ${borderClr}`}
    >
      {text}{' '}
      <span className=" ">
        {sign}${Math.abs(amount)}
      </span>
      <button className="hidden">x</button>
    </li>
  );
}

export default Transaction;
