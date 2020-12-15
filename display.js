import React,{useEffect,useState,useContext} from 'react';
import { StyleSheet, Text, View,Button,ImageBackground} from 'react-native';
import Myheader from './components/header';
import { TextInput } from 'react-native-paper';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Header } from 'react-native/Libraries/NewAppScreen';
import {MovieContext} from './cityprovider';
import { AsyncStorage } from 'react-native';



export default function Display(props){
  
  const {value1,value2,value3,value4}=useContext(MovieContext);
  const [plato,setplato]=value2;
  const [photoid,setphotoid]=value3;

      useEffect(()=>{
        
        console.log("use effect wallpeper me");
         console.log(photoid);
        loadstorage();
      },[photoid])

      const loadstorage=async()=>{
        try{
          console.log("display me loadstorage");
          const g=await AsyncStorage.getItem('testid');
          const value = await AsyncStorage.getItem('arr');
          if (value !== null) {
            await setplato(JSON.parse(value));
          }
          if(g!==null)
          {
            setphotoid(parseInt(g));
          }
         
         }
         catch(error){
             alert(error);
         }
       
      }

      return(

          <Card style={styles.container}>
            {console.log("location ke upar",photoid)}
             <ImageBackground style={{height:350,width:350,marginTop:0,}} source={{uri:plato[photoid].location}}> 
           
               
        <Card.Content>
        <Title style={{fontSize:29,marginBottom:17,marginTop:17,color:"white"}}>Weather details</Title>
        <Text style={{fontWeight:"bold",fontSize:18,color:"white",textAlign:"center",marginBottom:10}}>{props.city}</Text>
        <View>
      <Paragraph style={styles.context}>HUMIDITY -{props.humidity} {props.unit}</Paragraph>
        <Paragraph style={styles.context}>TEMPERATURE- {props.temperature} {props.unit}</Paragraph>
        <Paragraph style={styles.context}>FEELS LIKE- {props.temperature} {props.unit}</Paragraph>
        <Paragraph style={styles.context}>DESCRIPTION- {props.description}</Paragraph>
        {/* <Image source={{uri:"https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0005_haze.png"}}  */}
          {/* style={{width:200, height:200}}/> */}
        </View>
      </Card.Content>
      
      
     
      </ImageBackground> 
    </Card>
    
    
   
      )
  
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        // marginTop:300,
        justifyContent:"center",
        alignItems:"center",
        // borderWidth:0,
        backgroundColor:"black",
        // shadowColor:"coral",
        // borderColor:"blue",
        
        marginTop:0,
        // padding:25,
        width:350,
        // alignItems:"center",
        marginLeft:18,
       
    },
    context:{
      fontSize:14,
      fontWeight:"bold",
      marginTop:10,
      marginBottom:10,
      color:"white"
    }
})
