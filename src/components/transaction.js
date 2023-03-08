function Transaction({ id, amount, text }) {
  return (
    <li
      key={id}
      className="px-5 py-1 bg-white  border-gray-500 grid grid-cols-2"
    >
      {text} <span>-${amount}</span>
      <button className="hidden">x</button>
    </li>
  );
}

export default Transaction;
