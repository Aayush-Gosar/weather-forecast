import React,{useEffect,useState,useContext,Component} from 'react';
import { StyleSheet, Text,ToastAndroid, View,Button,Alert,Image,Keyboard,TouchableWithoutFeedback,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Myheader from '../components/header';
import { TextInput } from 'react-native-paper';
import {MovieContext} from '../cityprovider';
import * as ImagePicker from 'expo-image-picker';
import { AsyncStorage } from 'react-native';
import Toast from 'react-native-simple-toast';


export default function Wallpaper(){
    let [selectedImage, setSelectedImage] = React.useState(null);
     
    const {value1,value2,value3}=useContext(MovieContext);
    const [plato,setplato]=value2;

    

    const [photoid,setphtotid]=value3;

     const transfer=async(index)=>{
         console.log("index is ",index);
         setphtotid(index);
        //  console.log("index ke baad photoid ka value",photoid);
         Toast.show("wallpaper changed successfully");
         try{
        
          console.log("sabse phele id ka value",index.toString());
          await AsyncStorage.setItem('testid',index.toString());
          const g=await AsyncStorage.getItem('testid');
         // we=JSON.parse(g)
        
          console.log("id ka vlaue",parseInt(g));
          
         //  set phtotid(g);
        }
        catch(error)
       {
         alert(error);
         console.log(error);
       }

     }
    

     




    global.flag;
    global.len;

     






    const loaddata=async()=>{
      try {
        const value = await AsyncStorage.getItem('arr');
        if (value !== null) {
           setplato(JSON.parse(value));
        }
      } catch (error) {
        // Error retrieving data
         alert(error);
      }
     
    }
    

    const storedata = async () => {
      console.log("aaya async me");
      console.log(plato.length);
      // console.log(plato[4].location);
    try {
      await AsyncStorage.setItem('arr', JSON.stringify(plato));
      const mauja=await AsyncStorage.getItem('arr');
       setplato(JSON.parse(mauja));
     
    
    } catch (error) {
      alert(error)
    }
    };





    

       

     let choosephoto = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert('Permission to access camera roll is required!');
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
          return;
        }
        // console.log(pickerResult);
        global.len=plato.length+1;
        setplato([...plato,{location:pickerResult.uri,key:Math.random().toString()}]);

       
         
    }
    
    useEffect(()=>{


      console.log("Effect ke anddar");

      if(global.flag!==1)
     {
       loaddata();
       console.log("flag ke andar aaya");
       global.flag=1;
     }

      console.log(plato.length);
   
      console.log(plato.length);
    //  if(global.len==plato.length)
    //  {
    //   storedata();  
    //  }
    storedata();
    
    
     
     
    
   
   
   },[plato.length])
          
        
        
        
      

    //   const load =async()=>{
    //       try{
            
    //         if (p!==null)
    //         {
               
    //            console.log("get me");
    //            console.log(p);
    //            setplato(p);
    //         }
    //       }
    //       catch(err){
    //     alert(err);
    //       }
         
    //   }
    
    const nikalo=async(indi)=>{
     
      if(plato.length===1)
      {
          Alert.alert('there should be a default image','you cannot delete last image',[
            {text:"ok"}
          ])
      }
      else
      {
         if(photoid===indi)
         {
          Alert.alert('Current wallpaper image cannot be deleted','please change your wallpaper to delete the current image',[
            {text:"ok"}
          ])
         }
         else{
          setplato(plato=>{
            return plato.filter((x,index)=>{
              return indi!==index ;
            })
        })
        if(photoid>indi)
        {
          try{
            setphtotid(photoid-1);
            console.log("sabse phele id ka value".toString());
            await AsyncStorage.setItem('testid',(photoid-1).toString());
            const g=await AsyncStorage.getItem('testid');
            
           // we=JSON.parse(g)
          
            // console.log("id ka vlaue",parseInt(g));
            
           //  set phtotid(g);
          }
          catch(error)
         {
           alert(error);
           console.log(error);
         }
        }
        Toast.show("deleted image successfully");
         }
      }

     
    }
   
      

    return(
        
       <View style={styles.spread}>
            
           <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,color:"red"}}>Long press on any of the image to change wallpaper </Text>
           <Text style={{textAlign:"center",fontWeight:"bold",fontSize:16,color:"red"}}>Click on any of the image to delete image </Text>
           <FlatList 
         data={plato}
         numColumns="2"
        renderItem={({item,index})=>(
            <View>
            <TouchableOpacity onLongPress={()=>{
                transfer(index)
            }} 
            onPress={()=>{
              nikalo(index)
            }} >
            <View>
        <Image style={{width:175,height:200,marginBottom:10,marginTop:10,marginLeft:15,}} source={{uri:item.location}} />
                {/* {console.log(index)} */}
                </View>
                </TouchableOpacity>
             
               
              </View>

             ) 
            
            }  
          
           
                     
         />
         <View style={styles.butt}>
       <Button title="add wallpaper" onPress={choosephoto} color="coral" /> 
       </View> 
       </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:100,
        // backgroundColor:"pink",
    },
    photobound:{
        width:300,
    },
    spread:{
        flex:1,
    },
    butt:{
        padding:15,
        width:300,
        // alignItems:"center",
        marginBottom:10,
        marginLeft:50,

    }
})