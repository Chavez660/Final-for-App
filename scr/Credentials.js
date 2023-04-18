import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
  
  } from "react-native";
  

  
  const NavigationToHome = props => {
  }
  const Credentials = props => {
    
    const [text, onChangeText] = React.useState('');

    return (
   
       
        <View style={styles.container}>
            <TextInput 
            placeholder="Upload photos"
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            />
           
            <Button title="Submit"
            
                color="#A57A5A"></Button> 
            <Button
                title="Go to Profile"
                color="#A57A5A"
                onPress={() => {
                    global.logged_in = false
                    props.navigation.navigate('Profile');
                }}
            />
    </View>
       )
    }
     
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D3D3D3",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
      },
    input: {
      borderWidth: 2,
      padding: 100,
      borderHeight: 20,
      marginTop: 50,
    },
  })
  
  
  export default Credentials;