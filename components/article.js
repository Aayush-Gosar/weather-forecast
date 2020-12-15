import React,{useEffect,useState,useContext} from 'react';
import { StyleSheet,ScrollView, Text, View,Button,Alert,ImageBackground,Keyboard,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import Myheader from './header';
import {MovieContext} from '../cityprovider';
import {MaterialIcons} from 'react-native-vector-icons';
import Toast from 'react-native-simple-toast';
import { AsyncStorage } from 'react-native';
import { setProvidesAudioData } from 'expo/build/AR';


export default function Article({navigation}){

  console.log(global.store);
  const {value1,value2,value3,value4}=useContext(MovieContext);
  const [dekho,setdekho]=value1;
  console.log("lafda ho jaega");
 

//   console.log(dekho);
  const loaddata=async()=>{
    try {
      const value = await AsyncStorage.getItem('record');
      if (value !== null) {
         setdekho(JSON.parse(value));
         console.log("dekho ka length if me ",dekho.length);
      }
    } catch (error) {
      // Error retrieving data
       alert(error);
    }
    console.log("dekho ka length load me ",dekho.length);
  }


  const storedata = async () => {
    console.log("aaya async me");
    console.log(dekho.length);
    // console.log(plato[4].location);
  try {
    await AsyncStorage.setItem('record', JSON.stringify(dekho));
    const mauja=await AsyncStorage.getItem('record');
     setdekho(JSON.parse(mauja));
    
   
  
  } catch (error) {
    alert(error)
  }
  };
   global.articleflag;
  useEffect(()=>{

      console.log("artcle ke effect ke andar");
  
      // storedata();
      console.log("load datame aaya")
      console.log("flag ka value ",global.articleflag);
      if(global.articleflag!==1)
      {
        console.log("if me aaya");
        loaddata();
        global.articleflag=1;
        console.log("abh flag ka value",global.articleflag);
         console.log("dekho ka length load ke baad",dekho.length)
      }

      else if(global.articleflag==1)
      {
        console.log("else me aaya");
        storedata();

      }
 
 
 },[dekho.length])


   function thirdc(balue){

     console.log(balue);
     console.log("delete function me AAAYA");
     if(balue!==0)
     {
      setdekho(dekho=>{
        return dekho.filter((x,index)=>{
          return index!==balue;
        })
   })
   Toast.show("Deleted record successfully");
     }
    else{
      Toast.show("Example cannot be deleted");
    }
    }
  

    return(
      <ScrollView>
      <View>
         <Myheader navigation={navigation} title="Article" subtitle=""/>
        
      <View style={styles.container}>
       
      <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,color:"red"}}>Long press on any of the record to delete record </Text>
    
       
      {dekho.map((x,index)=>(
       
        <View style={styles.box}>
           <TouchableOpacity onLongPress={()=>{
          thirdc(index);
        }}>
         
          
       
        
          
        <Text >CITY : {x.sheher}</Text>
        <Text >TEMPERATURE : {x.tempe} {x.unit}</Text>
        <Text >FEELS LIKE : {x.feelslike} {x.unit}</Text>
        <Text >HUMIDITY : {x.humour} {x.unit}</Text>
        <Text  style={{marginLeft:185,}}>{x.datetime}</Text>
        </TouchableOpacity>
        </View>
      
       
      ))}
    
       
      </View>
      
      </View>
      </ScrollView>
    )
    
    }

    const styles=StyleSheet.create({
        container:{
           alignItems:"center",
           justifyContent:"center",
           marginTop:10,
        },
        box:{
            padding :20,
            borderWidth:0.5,
            marginBottom:10,
            // marginTop:10,
            width:300,
            backgroundColor:"grey",
            color:"white",

            

        }
    })