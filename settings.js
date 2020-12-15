import React,{useEffect,useState,useContext} from 'react';
import { StyleSheet, Text,View,Button,Alert,Image,Keyboard,TouchableWithoutFeedback,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Myheader from './components/header';
import { TextInput } from 'react-native-paper';
import {MovieContext} from './cityprovider';
import MyStack from './stacknavigation';


export default function Settings({navigation}){

     
    // const {value1,value2,value3}=useContext(MovieContext);
    // const [plato,setplato]=value2;


    // const [photoid,setphtotid]=value3;

    //  function transfer(index){
    //      console.log("index is ",index);
    //      setphtotid(index);
        

    //  }


    return(
        
        <View>
       
        
        <Text style={{color:"red",fontSize:24,fontWeight:"bold",textAlign:"center",marginTop:20,}}>
                
                This is settings screen
            </Text>
          <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Wallpaper")}} > 
              <View style={styles.tabular}>
                  <Text>WALLPAPER</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                navigation.navigate("ChangeUnit")}} > 
              <View style={styles.tabular}>
                  <Text>CHANGE UNIT</Text>
              </View>
            </TouchableOpacity>
            </View>

       
         
        
        
                
            {/* <Image style={{width:200,height:200,marginBottom:10,marginTop:10}} source={require('./assets/icon.png')} />
            <Image style={{width:200,height:200,marginBottom:10,marginTop:10}} source ={require('./assets/ww.png')} />
            <Image style={{width:200,height:200,marginBottom:10,marginTop:10}} source ={require('./assets/background.jpg')} /> 
             */}
           

            </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        // flexDirection:"row",
        
        marginTop:100,
        width:"100%",
        
        // backgroundColor:"pink",
    },
    photobound:{
        width:300,
    },
    tabular:{
        padding:20,
        borderWidth:0.3,
        width:"100%",
        // marginBottom:5,
        
    }
})