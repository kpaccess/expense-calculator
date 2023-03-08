import { Action } from './GlobalState';

const appReducer = (state, action) => {
  switch (action.type) {
    case Action.deleteTransaction:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case Action.addTransaction:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default appReducer;
