import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {useDate} from '../../context/DateContext';
import { Months } from '@/constants/Months';






const CustomDatePicker = () => {
  const {month, incrementMonth, decrementMonth, year} = useDate();
  // const [month, setMonth] = useState<number>(date.getMonth() + 1);
  // const [year, setYear] = useState(date.getFullYear());

  const getMonth = () => {
    const monthString = String(month).padStart(2, '0')
    return `${Months[monthString]} ${year}`
  } 

    // const incrementMonth = () => {
    //     if(month == 12){
    //         setYear(prevYear => prevYear + 1);
    //         setMonth(1);
    //     }
    //     else {
    //     setMonth(pervMonth => pervMonth + 1);
    //     }
    // };

    // const decrementMonth = () => {
    //     if(month == 1){
    //         setYear(prevYear => prevYear - 1);
    //         setMonth(12);
    //     }
    //     else {
    //     setMonth(pervMonth => pervMonth - 1);
    //     }
    // };
  
    

  return (
    <View className='my-4 mx-auto w-full  bg-[#1e561e] rounded-lg'>
      <TouchableOpacity className='flex flex-row p-4 ' onPress={() => {}}>
        <Text onPress={decrementMonth}><AntDesign name="leftcircle" size={30} color="white" /></Text>
        <Text className='text-white mx-auto my-auto text-md'>{getMonth()}</Text>
        <Text onPress={incrementMonth}><AntDesign name="rightcircle" size={30} color="white" /></Text>
      </TouchableOpacity>
    </View>
  );
};


export default CustomDatePicker;
