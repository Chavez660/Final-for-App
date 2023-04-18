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
const Profile = props => {

  const [text, onChangeText] = React.useState('');

  return (

       
    <View style={styles.container}>
            <Text>Personal Information:  {"\n"}</Text>
            <Text>Welcome {global.firstName + " " + global.lastName}{"\n"}</Text>
            <Text>User Email: {global.email}</Text>
            <Text>Skills: {global.WorkField}</Text>
            <Text>Age: {global.age}</Text>
            <Text>Contact Number: {global.ContactNumber}</Text>
            <Text>Status: </Text>

            <Button
                title="Log out"
                color="#A57A5A"
                onPress={() => {
                    global.logged_in = false
                    props.navigation.navigate('Home');
                }}
            />
            <Button
                title="Submit credentials"
                color="#A57A5A"
                onPress={() => {
                    props.navigation.navigate('Credentials');
                }}
            />
            <Button title="Update Profile"
                color="#A57A5A"></Button> 
            
            <Button
                    title="Return to Dashboard"
                    color="#A57A5A"
                    onPress={() => {
                        props.navigation.navigate('Dashboard');
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
    padding: 50,
    borderHeight: 20,
    marginTop: 50,
  },
})


export default Profile;