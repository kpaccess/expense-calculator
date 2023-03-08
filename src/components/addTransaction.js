import { useState } from "react";

function AddTransaction() {
  const [text, setText] = useState("Enter text ...");
  const [amount, setAmount] = useState(0);
  console.log(amount);
  return (
    <div className="mt-10">
      <h3 className=" border-b-2 border-gray-200">Add new transaction</h3>
      <form className="mt-4">
        <div className="flex flex-col">
          <label htmlFor="text" className="mb-4">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="pl-4 border-gray-200"
          />
        </div>
        <div className="mt-1 flex flex-col">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="pl-2 border-gray-200 pb-2  mb-4"
          />
          <button className=" bg-purple-500 text-white p-4">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
