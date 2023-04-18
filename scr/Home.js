//Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList
} from "react-native";
import LoginFeedback from "../components/LoginVerify/LoginFeedback";
import LoginVerify from "../components/LoginVerify/LoginVerify";
import axios from "axios";

const NavigationToForgotPassword = props => {
  props.navigation.navigate('ForgotPassword?');
}
const NavigationToRegistration = props => {
  props.navigation.navigate('Registration');
}



const Home = props => {

    const [data, setData] = useState({   
        username: '',
        password1: '',
    })

    const navigate = useNavigate();

    const { username, password1 } = data;

    const [error, setError] = useState("");
    const submit = () => {
      console.log(data);
      axios
        .post("http://localhost:8000/api/v1/accounts/token/login/", data, {})
        .then((response) => {
          setData("");
  
          navigate("/Profile");
        })
        .catch((error) => {
          console.log(error);
          setError(
            "Invalid Credentials!\nor your account may not be activated\nplease check your email for activation"
          );
        });
    };


    const [btnDisabled, setBtnDisabled] = useState(false)
const [returnCode, setreturnCode] = useState()

useEffect(() => {
    setreturnCode(LoginVerify(data))
    if (returnCode === 1) { // Code snippet to check if valid ang credentials
        setBtnDisabled(false)
    }
    else {
        setBtnDisabled(true)
    }
}, [data, returnCode])

  return (
    <View style={styles.container}>

        <Image style={{
            resizeMode: "cover",
            height: 300,
            width: 300
          }}
          source={require("../scr/Logo.png")} />
        

        <View style={styles.inputView}>
        
        <p class="errortext">{error}</p>
        
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#FFFFFF"
            value={data.email}
                onChangeText={text => {
                    setData({
                        ...data,
                        username: text
                    })
                }}
          />
          </View>
          <View style={styles.inputView}>
            <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
            value={data.password}
                onChangeText={text => {
                    setData({
                        ...data,
                        password1: text
                    })
                }}
            />
          </View>

          <Button disabled={btnDisabled} color="#A57A5A" title='Login' onClick={submit}></Button>
            <LoginFeedback returnCode={returnCode} />

          <Button title='Forgot Password?' color="#A57A5A" onPress={()=> NavigationToForgotPassword(props) }></Button>
          <Button title='Register?' color="#A57A5A" onPress={()=> NavigationToRegistration(props) }></Button>
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
    borderRadius: 30,
    width: "60%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  input: {
  textColor: "#FFFFFF"
  },
  image: {
    marginBottom: 40,
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




export default Home;