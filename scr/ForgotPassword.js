//ForgotPassword.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from "react-native";
import ForgotFeedback from "../components/ForgotPassword/ForgotFeedback";
import ForgotVerify from "../components/ForgotPassword/ForgotVerify";
import { NavigationContainer } from '@react-navigation/native';


const NavigationToHome = props => {
  props.navigation.navigate('Home');
} 

const Submit = props => {
  const [data, setData] = useState({   
    email: ''
})

const [btnDisabled, setBtnDisabled] = useState(false)
const [returnCode, setreturnCode] = useState()

useEffect(() => {
    setreturnCode(ForgotVerify(data))
    if (returnCode === 1) { // Code snippet to check if valid ang credentials
        setBtnDisabled(false)
    }
    else {
        setBtnDisabled(true)
    }
}, [data, returnCode])
    return (
    <View style={styles.container}>
        <View>
          <TextInput
            style = {styles.inputView}
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            value={data.email}
                onChangeText={text => {
                    setData({
                        ...data,
                        email: text
                    })
                }}
         />
        </View>
        <ForgotFeedback returnCode={returnCode} />
          <Button disabled={btnDisabled} color="#A57A5A" title='Submit' onPress={()=> NavigationToHome(props) }></Button>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    backgroundColor: "#A57A5A",
    borderRadius: 10,
    width: 120,
    height: 40,
    marginBottom: 20,
    textAlign: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 5,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFFFFF",
  },
})

export default Submit;