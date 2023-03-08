import { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

export const Action = {
  deleteTransaction: 'DELETE_TRANSACTION',
  addTransaction: 'ADD_TRANSACTION',
};

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  // Delete Transaction
  function deleteTransaction(id) {
    dispatch({
      type: Action.deleteTransaction,
      payload: id,
    });
  }

  // Add Transaction
  function addTransaction(transaction) {
    dispatch({
      type: Action.addTransaction,
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
