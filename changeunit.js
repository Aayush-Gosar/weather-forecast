import React,{useEffect,useState,useContext} from 'react';
import { StyleSheet, Text,View,Button,Alert,Image,Keyboard,TouchableWithoutFeedback,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';
import {MovieContext} from './cityprovider';
import Toast from 'react-native-simple-toast';
import { AsyncStorage } from 'react-native';

export default function ChangeUnit()  {

const {value1,value2,value3,value4}=useContext(MovieContext);
 const [check,setcheck]=value4;

 const unichange=async(choose)=>{
     setcheck(choose);
     try{
        
      console.log("sabse phele id ka value",choose.toString());
      await AsyncStorage.setItem('unitid',choose.toString());
      const g=await AsyncStorage.getItem('unitid');
     // we=JSON.parse(g)
    
      console.log("id ka vlaue",parseInt(g));
      Toast.show("Unit is changed ")
     //  set phtotid(g);
    }
    catch(error)
   {
     alert(error);
     console.log(error);
   }
 }

  

    return (
      <View style={styles.container}>
      
          <View style={styles.sort}>
              
        <RadioButton
          value="first"
          status={check === 1 ? 'checked' : 'unchecked'}
          label="dsfhcei"
          onPress= {() => { unichange(1) }}
        />
         <Text>CELCIUS</Text>
      
        </View>
        <View style={styles.sort}>
        <RadioButton
          value="second"
          status={check === 2 ? 'checked' : 'unchecked'}
          onPress={() => {unichange(2)}}
        />
         <Text>KELVIN</Text>
         </View>
         <View style={styles.sort}>
          <RadioButton
          value="third"
          status={check === 3 ? 'checked' : 'unchecked'}
          onPress={() => {unichange(3)}}
        />
        <Text>FARANHEIT</Text>
        </View>
        
      </View>
    );
  }

  const styles=StyleSheet.create({
      container:{
          marginLeft:150,
          marginTop:100,
      },
      sort:{
          flexDirection:"row",
          alignItems:"center",
          marginTop:2,
      }
  })


