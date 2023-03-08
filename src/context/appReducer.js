import { Action } from './GlobalState';

const appReducer = (state, action) => {
  switch (action.type) {
    case Action.deleteTransaction:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transcition) => transcition.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default appReducer;
