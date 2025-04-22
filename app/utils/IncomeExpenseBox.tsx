import { View, Text, } from 'react-native';
import AnimatedButton from './AnimatedButton';

import { useDate } from '../../context/DateContext';


type IncomeExpenseBoxProps = {
  isIncome: boolean,
  data: {
    name: String,
    amount: number,
    date: Date,
  }[],
}



const IncomeExpenseBox = ({ isIncome, data } : IncomeExpenseBoxProps ) => {

  const {date} = useDate();

  const calcTotalExpense = () : number => {
    console.log(data);
    let totalAmount = 0;
    filteredData.forEach(item => {
      totalAmount += item.amount;
    })
    return totalAmount;
  }

  const filteredData = data.filter(item =>
    item.date.toDateString() === date.toDateString()
  );

  return (
    <View className='shadow-md my-2'>
    <View className='bg-[#6c6d95] flex-row justify-between p-4'>
      <Text className='text-black'>{isIncome ? 'Total Income (Credit)' : 'Total Expense (Debit)' } </Text>
      <Text className='text-black'>${calcTotalExpense()}</Text>
    </View>
    {filteredData.map((element,index) => {
      return (
        <View key={index} className='flex flex-row justify-between my-6 px-4'>
          <Text>{element.name}</Text>
          <Text>{element.amount}</Text>
        </View>
      )
    })}
    </View>
  );
};

export default IncomeExpenseBox;
