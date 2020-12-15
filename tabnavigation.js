import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './settings';
import Home from './components/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MaterialIcons} from 'react-native-vector-icons';
import MyStack from './stacknavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home" 
       initialRouteName="Home"
       tabBarOptions={{
         activeTintColor: '#e91e63',
       }}
      >
      
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="MyStack" component={MyStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}