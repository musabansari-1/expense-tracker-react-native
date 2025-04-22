import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View className='h-[7%] bg-purple-900 justify-center'>
      <Text className='text-white text-xl mx-4 font-bold'>Expense Tracker</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})