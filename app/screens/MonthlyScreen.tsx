import { StyleSheet, Text, View, Modal, } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomDatePicker from '../utils/CustomDatePicker'
import CustomMonthPicker from '../utils/CustomMonthPicker'
import IncomeExpenseBox from '../utils/IncomeExpenseBox';
import AnimatedButton from '../utils/AnimatedButton';
import IncomeExpenseForm from '../utils/IncomeexpenseForm';
import { useFinance } from '../../context/FinanceContext';
import { useDate } from '@/context/DateContext';
import { AntDesign } from '@expo/vector-icons';
import MonthlyFinanceItem from '../utils/MonthlyFinanceItem';

type Transaction = {
    name: string;
    amount: number;
    date: Date;
};

type GroupedTransaction = {
    incomes: Transaction[];
    expenses: Transaction[];
}

type GroupedByDateArray = GroupedTransaction[];



const MonthlyScreen = () => {
    const [showForm, setShowForm] = useState(false);

    const { incomes, expenses } = useFinance();
    const { month } = useDate();
    const [monthlyFinances, setMonthlyFinances] = useState<any>([]);

    // const [incomes, setIncomes] = useState<FormData[]>([]);
    // const [expenses, setExpenses] = useState<FormData[]>([]);

    for (const item in monthlyFinances) {
        console.log(monthlyFinances[item]);
    }

    useEffect(() => {
        const filterbyMonth = () => {
            const filteredExpenses = expenses.filter(expense => expense.date.getMonth() === month);
            console.log('filteredExpenses', filteredExpenses);
            const filteredIncomes = incomes.filter(income => income.date.getMonth() === month);
            const groupedByDate: GroupedByDateArray = [...filteredIncomes, ...filteredExpenses].reduce((acc: GroupedByDateArray, transaction) => {
                const dateKey = transaction.date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

                // Find the existing group for the date
                let group = acc.find(item => item.date === dateKey);

                // If no group exists for this date, create a new one
                if (!group) {
                    group = { date: dateKey, incomes: [], expenses: [] };
                    acc.push(group);
                }

                // Check if the transaction exists in filteredIncomes or filteredExpenses
                if (filteredIncomes.includes(transaction)) {
                    group.incomes.push(transaction);
                } else if (filteredExpenses.includes(transaction)) {
                    group.expenses.push(transaction);
                }

                return acc;
            }, [] as GroupedByDateArray);


            console.log('Man', groupedByDate);
            setMonthlyFinances(groupedByDate);
        }
        filterbyMonth();
    }, [month, incomes, expenses])



    return (
        <View className='p-4 h-full'>
            <CustomMonthPicker />
            {monthlyFinances.map(item => {
                return <MonthlyFinanceItem item={item}/>
            })}
            <AnimatedButton onPress={() => setShowForm(!showForm)} />
        </View>
    )
}

export default MonthlyScreen

const styles = StyleSheet.create({})