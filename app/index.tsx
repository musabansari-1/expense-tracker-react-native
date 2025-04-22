import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DailyScreen from './screens/DailyScreen';
import MonthlyScreen from './screens/MonthlyScreen';

// import ProfileScreen from './screens/ProfileScreen';
// import SettingsScreen from './screens/SettingsScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          tabBarIndicatorStyle: { backgroundColor: '#fff' },
          tabBarStyle: { backgroundColor: '#4545a3' },
        }}
      >
        <Tab.Screen name="Daily" component={DailyScreen} />
        <Tab.Screen name="Monthly" component={MonthlyScreen} />
        <Tab.Screen name="Yearly" component={DailyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
