import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import {useDate} from '../../context/DateContext';


const initialLayout = { width: Dimensions.get('window').width };

const IncomeExpenseForm = ({ formData, handleInputChange, handleSubmit, setShowForm }) => (
  <View style={styles.form}>
    <Text style={styles.label}>Name</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter name of input"
      value={formData.name}
      onChangeText={(value) => handleInputChange('name', value)}
      placeholderTextColor="#aaa"
    />
    <Text style={styles.label}>Amount</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter the amount"
      value={formData.amount}
      onChangeText={(value) => handleInputChange('amount', value)}
      keyboardType="numeric"
      placeholderTextColor="#aaa"
    />
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setShowForm(false)}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const FormComponent = ({ onSubmit, setShowForm }) => {
  const {date} = useDate();
  const [formData, setFormData] = useState({ name: '', amount: '', date:date });
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'income', title: 'Income' },
    { key: 'expense', title: 'Expense' },
  ]);

  useEffect(() => {
    // Reset form data when the index changes
    setFormData({ name: '', amount: '' ,date:date});
  }, [index]);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('insider form here');
    const isIncome = index === 0;
    console.log(isIncome);
    console.log(formData);
    onSubmit(formData, isIncome, date);
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'income':
        return <IncomeExpenseForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} setShowForm={setShowForm} />;
      case 'expense':
        return <IncomeExpenseForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} setShowForm={setShowForm} />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#6c6d95' }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FormComponent;
