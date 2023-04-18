import React, { useState, useEffect } from "react";
import {
  StyleSheet, 
  Button,
  SafeAreaView,
  TextInput,
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

const workers = [
  {
    id: 1,
    name: 'John Smith',
    workField: 'Construction',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Jane Doe',
    workField: 'Cleaning',
    rating: 3.8
  },
  {
    id: 3,
    name: 'Bob Johnson',
    workField: 'Plumbing',
    rating: 5
  },
  {
    id: 4,
    name: 'Emily Davis',
    workField: 'Electrician',
    rating: 4.2
  },
];

const Dashboard = props => {
  const NavigationToDashboard = props => {
    props.navigation.navigate('Dashboard');
  }
  const NavigationToProfile = props => {
    props.navigation.navigate('Profile');
  }
  const NavigationToMessages = props => {
    props.navigation.navigate('Messages');
  }
  const NavigationToReview = props => {
    props.navigation.navigate('Review');
  }
  const NavigationToStatus = props => {
    props.navigation.navigate('Status');
  }

  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
    <View style = {{
      width: 100
    }}>
    <TextInput placeholder="Search"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        />
    </View>
    <View
    style={styles.fixToText}>
    <View >
    
    </View>
        <Button title='Home' color="#A57A5A"   onPress={()=> NavigationToDashboard(props) }></Button>
        <Button title='Profile' color="#A57A5A" onPress={()=> NavigationToProfile(props) }></Button>
        <Button title='Messages' color="#A57A5A" onPress={()=> NavigationToMessages(props) }></Button>
        <Button title='Status' color="#A57A5A" onPress={()=> NavigationToStatus(props) }></Button>
        <Button title='Review' color="#A57A5A" onPress={()=> NavigationToReview(props) }></Button>
    </View>

    

    <View>
    <FlatList
      data={workers}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.workerContainer}>
          
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.workField}>{item.workField}</Text>
          <Text style={styles.rating}>{item.rating}</Text>
        </TouchableOpacity>
      )}
    />
    </View>
    
    </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#D3D3D3"
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  fixText: {
    flexDirection: 'row',
    justifyContent: 'space-between',


 
  },
  input: {
    borderWidth: 1,
    padding: 2,
    borderHeight: 2
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },
  workerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  name: {
    flex: 1,
    fontSize: 10
  },
  field: {
    flex: 1,
    fontSize: 10
  },
  rating: {
    marginLeft: 60, 
    flex: 1,
    fontSize: 10
  },

})


export default Dashboard;