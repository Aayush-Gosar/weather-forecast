import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, PanResponder } from 'react-native';
import { Appbar } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {MaterialIcons } from 'react-native-vector-icons';
import Home from './home';




export default function Myheader(props){




return(
    <Appbar.Header>
      
    
    <MaterialIcons name="menu"  size={28} color="white" style={{marginLeft:10,}} onPress={()=>{props.navigation.openDrawer();}}/>
    <Appbar.Content
      title={props.title}
      subtitle={props.subtitle}
      style={styles.header}
    />
      </Appbar.Header>




    
 

    

)


}

const styles=StyleSheet.create({
    header:{
      alignItems:"center",
      marginRight:15,
      

      

       
    }
})