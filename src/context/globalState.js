import { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

// Initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: 'Flower',
      amount: -20,
    },
    {
      id: 2,
      text: 'Salary',
      amount: 300,
    },
    {
      id: 3,
      text: 'Book',
      amount: -10,
    },
    {
      id: 4,
      text: 'Camera',
      amount: 150,
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

export const Action = {
  deleteTransaction: 'DELETE_TRANSACTION',
};

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: Action.deleteTransaction,
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
