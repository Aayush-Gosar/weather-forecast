import { createStackNavigator } from '@react-navigation/stack';
import React,{useEffect,useState,useContext} from 'react';
import Settings from './settings';
import Wallpaper from './stacknavigation/wallpaper';
import ChangeUnit from './changeunit';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Wallpaper" component={Wallpaper} />
      <Stack.Screen name="ChangeUnit" component={ChangeUnit} />
     
    </Stack.Navigator>
  );
}