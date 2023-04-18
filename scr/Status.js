import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PROJECTS = [
  { id: 1, name: 'Project 1', status: 'Active' },
  { id: 2, name: 'Project 2', status: 'Completed' },
  { id: 3, name: 'Project 3', status: 'In Progress' },
  { id: 4, name: 'Project 4', status: 'On Hold' },
];

const Status = () => {
  const [projects, setProjects] = useState(PROJECTS);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  name: {
    fontWeight: 'bold',
    width: '70%',
  },
  status: {
    width: '30%',
  },
});

export default Status;