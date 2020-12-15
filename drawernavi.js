import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, PanResponder } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
// import Home from './components/home';
import Article from './components/article';
import TabNavigation from './tabnavigation';


const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(76,153,0)',
    },
  };



    const Drawer = createDrawerNavigator();
export default function DrawerNavi(){

 
    return(
      
    <NavigationContainer independent={true} theme={MyTheme}  >
    <Drawer.Navigator initialRouteName="TabNavigation">
      <Drawer.Screen name="Search"  component={TabNavigation} />
      <Drawer.Screen name="Record Details" component={Article} />
    </Drawer.Navigator>
    </NavigationContainer>
   
    )
}