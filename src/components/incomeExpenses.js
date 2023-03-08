function IncomeExpense() {
  return (
    <div className="border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700  grid md:grid-cols-2 dark:text-white uppercase divide-x">
      <div className="p-4">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white  ">
          Income
        </h4>
        <p className=" text-green-600 ml-4">+$0.00</p>
      </div>

      <div className="p-4">
        <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
          Expense
        </h4>
        <p className=" text-red-500">-$0.00</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
