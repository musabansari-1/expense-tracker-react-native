import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {useDate} from '../../context/DateContext';


// Helper function to format a Date object as 'YYYY-MM-DD'
const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

const CustomDatePicker = () => {
  const {date, setDate} = useDate();

    const incrementDate = () => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + 1);
      setDate(newDate);
    };
  
    const decrementDate = () => {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - 1);
      setDate(newDate);
    };

  return (
    <View className='my-4 mx-auto w-full  bg-[#1e561e] rounded-lg'>
      <TouchableOpacity className='flex flex-row p-4 ' onPress={() => {}}>
        <Text onPress={decrementDate}><AntDesign name="leftcircle" size={30} color="white" /></Text>
        <Text className='text-white mx-auto my-auto text-md'>{getFormattedDate(date)}</Text>
        <Text onPress={incrementDate}><AntDesign name="rightcircle" size={30} color="white" /></Text>
      </TouchableOpacity>
    </View>
  );
};


export default CustomDatePicker;
