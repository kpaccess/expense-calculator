function TransactionList() {
  return (
    <div className="mt-10">
      <h3 className="font-bold border-b-2 border-gray-200">History</h3>

      <ul id="list" className="pt-5 ">
        <li className="px-5 py-1 bg-white  border-gray-500 grid grid-cols-2">
          Cash <span>-$400</span>
        </li>
      </ul>
    </div>
  );
}

export default TransactionList;
