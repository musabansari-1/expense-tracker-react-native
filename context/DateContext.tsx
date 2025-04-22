import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface DateContextType {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  month: number;
  year: number;
  incrementMonth: () => void;
  decrementMonth: () => void;
}

const defaultValue: DateContextType = {
  date: new Date(),
  setDate: () => {},
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  incrementMonth: () => {},
  decrementMonth: () => {},
};

const DateContext = createContext<DateContextType>(defaultValue);

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [month, setMonth] = useState<number>(date.getMonth() + 1);
  const [year, setYear] = useState<number>(date.getFullYear());

  const incrementMonth = () => {
    if (month === 12) {
      setYear((prevYear) => prevYear + 1);
      setMonth(1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  const decrementMonth = () => {
    if (month === 1) {
      setYear((prevYear) => prevYear - 1);
      setMonth(12);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  return (
    <DateContext.Provider value={{ date, setDate, month, year, incrementMonth, decrementMonth }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = (): DateContextType => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};
