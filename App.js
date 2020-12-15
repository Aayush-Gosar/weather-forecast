import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Button,Alert,ImageBackground,Keyboard,TouchableWithoutFeedback } from 'react-native';
import Myheader from './components/header';
import { TextInput } from 'react-native-paper';
import Display from './display'
import { Card, Title, Paragraph } from 'react-native-paper';
import DrawerNavi from './drawernavi';
import Home from './components/home';
//https://weatherstack.com/dashboard                   important link
//key=5781d971ecc72beb32651df1313cec99
import MovieProvider from './cityprovider';


export default function App() {

   
    return(
  
  <MovieProvider>
   <DrawerNavi />
   </MovieProvider>
    
 
    )
}



    


 

  


