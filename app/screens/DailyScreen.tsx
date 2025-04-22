
import { StyleSheet, Text, View, Modal, } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomDatePicker from '../utils/CustomDatePicker'
import IncomeExpenseBox from '../utils/IncomeExpenseBox';
import AnimatedButton from '../utils/AnimatedButton';
import IncomeExpenseForm from '../utils/IncomeexpenseForm';
import { AntDesign } from '@expo/vector-icons';
import {useFinance} from '../../context/FinanceContext';

type FormData = {
    name: string;
    amount: number;
    date: Date;
};


const DailyScreen = () => {
    const [showForm, setShowForm] = useState(false);

    const {incomes, expenses, addIncome, addExpense} = useFinance();

    // const [incomes, setIncomes] = useState<FormData[]>([]);
    // const [expenses, setExpenses] = useState<FormData[]>([]);



    const handleFormSubmit = async (formData: FormData, isIncome: boolean, date: Date) => {
        let amountInNumber = Number(formData.amount);
        formData.amount = amountInNumber;
        if (isIncome) {
            // await setIncomes((prevIncomes) => [...prevIncomes, formData]);
            addIncome(formData);
            setShowForm(false);
        }
        else {
            // await setExpenses((prevExpenses) => [...prevExpenses, formData]);
            addExpense(formData);
            setShowForm(false);
        }
    }

    return (
        <View className='p-4 h-full'>
            <CustomDatePicker/>
            <IncomeExpenseBox isIncome={true} data={incomes} />
            <IncomeExpenseBox isIncome={false} data={expenses} />
            {showForm &&
                <Modal
                    visible={showForm}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setShowForm(false)}
                >
                    <IncomeExpenseForm onSubmit={handleFormSubmit} setShowForm={setShowForm} />

                </Modal>
            }
            <AnimatedButton onPress={() => setShowForm(!showForm)} />
        </View>
    )
}

export default DailyScreen

const styles = StyleSheet.create({})