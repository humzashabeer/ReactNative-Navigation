import React from "react";
import { Text, View, StyleSheet, Button,SafeAreaView,TextInput,
     Image, ImageBackground, useState, Pressable } from "react-native";





const LoginScreen=({navigation})=>{
    const GoToRoot=()=>{
        navigation.navigate('Root');}

        const GoToSignupScreen=()=>{
            navigation.navigate('Signup');
          }
        
        const [emailinput, setemailinput] = React.useState("");
        const [passinput, setpassinput] = React.useState("");
        
        const onTextinput=()=>{
          if(!emailinput.trim()){
            alert('Please Enter Email');
            return;
      
          }
         if(!passinput.trim()){
          alert('Please Enter Password');
          return;
         }
         else GoToRoot();
      
        }
    return(


<ImageBackground style={styles.backgroundImage} source={require('../assets/backgroundImage.jpg')}>
<SafeAreaView style={styles.container}>

  <Image style={styles.imageStyle} source={require('../assets/E-Isamic-Ad.jpeg')}/>
  
<TextInput
  style={styles.input}
  onChangeText={
    (value)=> setemailinput(value)
  }
  value={emailinput}
  placeholder="Enter Email"
  keyboardType="email-address"
  //inlineImageLeft="../assets/emailicon.png"
  
/>
<TextInput
  style={styles.input}
  onChangeText={(value)=>setpassinput(value)}
  value={passinput}
  placeholder="Enter Password"
  keyboardType="text"
  secureTextEntry={true}
/>
       
       <Button style={styles.buttonStyle} title="Login" onPress={onTextinput}></Button>

 
 <Pressable style={styles.pressableStyle} onPress={GoToSignupScreen}><Text>
  Not Regitered Yet? SignUp?</Text></Pressable>
  

</SafeAreaView>
</ImageBackground>
    )
}

const styles= StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'blue',
        fontWeight:'500'
        
    },
    input: {
        height: 50,
        width:350,
        marginLeft: 20,
        marginRight:20,
        marginTop:20,
        marginBottom:20,
        borderWidth: 2,
        padding: 10,
        backgroundColor:'skyblue'
      },
      
      imageStyle:{
         height:350,
         width:350,
         alignItems:'center',
         justifyContent:'center',
         margin:10
        
    
      },
      buttonStyle:{
        height: 40,
        margin:40,
       
    
      },
      pressableStyle:{
            height:35,
            backgroundColor:'skyblue',
            borderColor:'red',
            borderWidth:3,
            margin:20
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch',
        justifyContent: 'center',
      }
})

export default LoginScreen;