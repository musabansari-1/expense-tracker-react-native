import { StyleSheet, Text, View } from 'react-native'
import {Slot, Stack} from 'expo-router'
import { NativeWindStyleSheet } from "nativewind";
import {DateProvider} from '../context/DateContext';
import {FinanceProvider} from '../context/FinanceContext';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const RootLayout = () => {
  
  return (
    <DateProvider>
      <FinanceProvider>
   <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerShown: true,
        title: 'Expense Tracker', // Set the header title
        headerStyle: {
          backgroundColor: '#4545a3', // Customize the background color
        },
        headerTitleStyle: {
          color: '#fff', // Customize the title color
          fontWeight: 'bold', // Make the title bold
        },
      }}
    />
   </Stack>
   </FinanceProvider>
   </DateProvider>
  )
}

export default RootLayout
