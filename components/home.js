import React,{useEffect,useState,useContext} from 'react';
import { StyleSheet, Text, View,Alert,Button,ImageBackground,Keyboard,TouchableWithoutFeedback } from 'react-native';
import Myheader from './header';
import { TextInput } from 'react-native-paper';
import Display from '../display';
import { Card, Title, Paragraph } from 'react-native-paper';
import {MovieContext} from '../cityprovider';
import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';

 

export default function Home({navigation}){

  useEffect(()=>{
    console.log("in Useeffect");
    getunitfunc();
    
  },[])

const getunitfunc=async()=>{
  const unicorn=await AsyncStorage.getItem('unitid');
  if(unicorn!==null)
  {
    setcheck(parseInt(unicorn));
  }
} 

  console.log("body");
  const {value1,value2,value3,value4}=useContext(MovieContext);

  const [dekho,setdekho]=value1;
  
  const [check,setcheck]=value4;
  
  console.log("gaurd");
 
    const [city,setcity]=useState(
        {
          tempe:'',
          humour:'',
          feelslike:'',
          description:'',
          sheher:'',
          unit:'',
          datetime:'',
       }
   
      )
   
      const [text,settext]=useState('');
   
      const [suggest,setsuggest]=useState([]);
      
     function tp(x)
     {
       settext(x);
     } 
     
    
   
     function fetchcity()
     {
       
       var loca=text;
   
       console.log("fetch me aaya");
       console.log(loca);
       
        if(check==1)
      {
         
        fetch(`http://api.weatherstack.com/current?access_key=5781d971ecc72beb32651df1313cec99&query=${loca}&units=m`)
        .then(data=>data.json())
        .then(data2=>{
          console.log(data2);
          
           if(typeof data2.current==='undefined')
           {
            Alert.alert(
              'Incorrect city name',
              'Please enter correct city name',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('Ask me later pressed')
                },
              ]
            )
          }
          else{
    
            if(data2.request.query.split(',')[0].toLowerCase()===text.toLowerCase())
            {
              // console.log(data2.request.query.split(','));
           
              var today = new Date();

             var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();  
    
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

             var dateTime = date+' '+time;

          // console.log(dateTime);
              setcity(x=>{
                return{
                tempe:data2.current.temperature,
                humour:data2.current.humidity,
                feelslike:data2.current.feelslike,
                description:data2.current.weather_descriptions[0],
                sheher:data2.request.query.split(',')[0].toUpperCase(),
                unit:'°C',
                datetime:dateTime,
                
                }
              });
 
               
               global.store="mumbai";
      
            }
            else
            { 
              Alert.alert(
                'Incorrect city name',
                'Please enter correct city name',
                [
                  {
                    text: 'OK',
                   
                  },
                ]
              )

            }
    
    
          }
          
          
         
        })



      }

      else if(check===2)
      {
        fetch(`http://api.weatherstack.com/current?access_key=5781d971ecc72beb32651df1313cec99&query=${loca}&units=s`)
        .then(data=>data.json())
        .then(data2=>{
          console.log(data2);
          
           if(typeof data2.current==='undefined')
           {
            Alert.alert(
              'Incorrect city name',
              'Please enter correct city name',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('Ask me later pressed')
                },
              ]
            )
          }
          else{
    
            if(data2.request.query.split(',')[0].toLowerCase()===text.toLowerCase())
            {
              var today = new Date();

              var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();  
     
             var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
              var dateTime = date+' '+time;


              setcity(x=>{
                return{
                tempe:data2.current.temperature,
                humour:data2.current.humidity,
                feelslike:data2.current.feelslike,
                description:data2.current.weather_descriptions[0],
                sheher:data2.request.query.split(',')[0].toUpperCase(),
                unit:'K',
                datetime:dateTime        
                }
              });
 
               
               global.store="mumbai";
 
      
            }
            else
            {
              console.log("galat hai");
              Alert.alert(
                'Incorrect city name',
                'Please enter correct city name',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('Ask me later pressed')
                  },
                ]
              )

            }
    
          }
          
          
         
        })



      }

      else if(check===3)
      {
        fetch(`http://api.weatherstack.com/current?access_key=5781d971ecc72beb32651df1313cec99&query=${loca}&units=f`)
        .then(data=>data.json())
        .then(data2=>{
          console.log(data2);
          
           if(typeof data2.current==='undefined')
           {
            Alert.alert(
              'Incorrect city name',
              'Please enter correct city name',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('Ask me later pressed')
                },
              ]
            )
          }
          else{
    
            if(data2.request.query.split(',')[0].toLowerCase()===text.toLowerCase())
            {
              var today = new Date();

              var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();  
     
             var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
              var dateTime = date+' '+time;
              setcity(x=>{
                return{
                tempe:data2.current.temperature,
                humour:data2.current.humidity,
                feelslike:data2.current.feelslike,
                description:data2.current.weather_descriptions[0],
                sheher:data2.request.query.split(',')[0].toUpperCase(),
                unit:'°F',
                datetime:dateTime,  
                }
              });
 
               
               global.store="mumbai";
      
            }
            else
            {
              Alert.alert(
                'Incorrect city name',
                'Please enter correct city name',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('Ask me later pressed')
                  },
                ]
              )
            }
          }      
        })
      }
       
   
        settext('');
     }
      



    return (
      
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View style={styles.whole}>
           <Myheader navigation={navigation} title="Weather Forecast" subtitle="search city"/>
        
              <View style={styles.container}>
              
                  <TextInput
                  label='search city'
                  // value="aayush"
                  value={text}
                  onChangeText={x=>tp(x)}
                />
          <View style={styles.butt}>
        
          <Button  title="Search city" onPress={fetchcity} color="blue" />
         
          </View>
          <View style={styles.box}>
            
          <Display humidity={city.humour} unit={city.unit} temperature={city.tempe} city={city.sheher} feels={city.feelslike} description={city.description}/>
          </View>
         
        </View>
          <View style={styles.butt2}>
          <Button title="record details" onPress={async()=>{
            if(city.tempe==='')
            {
                console.log("please search first");
                Alert.alert(  'Invalid record',
                'Please search city before recording',
                [
                  {
                    text: 'OK',
                  
                  },
                ]
              )
                
            }
            else
            {
            
              setdekho([...dekho,city]);
              try{
                await AsyncStorage.setItem('record',JSON.stringify([...dekho,city]));
                console.log("record asyncstorageme aaya");
                console.log("dekho ka length ",dekho.length);
                  setcity(x=>{
                  console.log("reset me aaya");
                  return{
                    tempe:'',
                    humour:'',
                    feelslike:'',
                    description:'',
                    sheher:'',
                    unit:'',
                    datetime:'',

                  }
                })
              }
              catch(error){
                    alert(error);
              }
              Toast.show('Details are recorded successfully');
            }
            
          }} color="blue" />
        </View>
        </View>
      
        </TouchableWithoutFeedback>
     
        
      );
    }
    
   

    const styles = StyleSheet.create({
      whole:{
         flex:1,
         backgroundColor:'darkgrey',
      },
        container: {
          // flex: 1,
          // backgroundColor: 'pink',
          // alignItems: 'center',
          // justifyContent: 'center',
        },
        box:{
          marginTop:40,
        },
        butt:{
          // backgroundColor:"indigo",
          color:"white",
          
          // padding:20,
          borderRadius:5,
          width:300,
          // alignItems:"center",
          marginLeft:45,
          marginTop:40,
        },
        butt2:{
          marginTop:370,
          width:200,
          marginLeft:165,
        }
      })
      
