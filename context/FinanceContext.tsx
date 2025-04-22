import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the structure of an income/expense entry
interface Entry {
    name: string;
    amount: number;
    date: Date;
}

// Define the shape of the context
interface FinanceContextType {
  incomes: Entry[];
  expenses: Entry[];
  addIncome: (entry: Entry) => void;
  addExpense: (entry: Entry) => void;
//   removeIncome: (id: string) => void;
//   removeExpense: (id: string) => void;
  totalIncome: number;
  totalExpenses: number;
}

// Create the context with default values
const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

// Provider component
export const FinanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [incomes, setIncomes] = useState<Entry[]>([]);
  const [expenses, setExpenses] = useState<Entry[]>([]);

  const addIncome = (entry: Entry) => {
    setIncomes((prevIncomes) => [...prevIncomes, entry]);
  };

  const addExpense = (entry: Entry) => {
    setExpenses((prevExpenses) => [...prevExpenses, entry]);
  };

//   const removeIncome = (id: string) => {
//     setIncomes((prevIncomes) => prevIncomes.filter((income) => income.id !== id));
//   };

//   const removeExpense = (id: string) => {
//     setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
//   };

  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <FinanceContext.Provider
      value={{
        incomes,
        expenses,
        addIncome,
        addExpense,
        // removeIncome,
        // removeExpense,
        totalIncome,
        totalExpenses,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

// Custom hook for using the FinanceContext
export const useFinance = (): FinanceContextType => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
};
