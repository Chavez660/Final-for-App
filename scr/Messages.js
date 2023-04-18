import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    setMessages([...messages, { text: input, id: Math.random(), type: 'sent' }]);
    setInput('');
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.type === 'received' && styles.received]}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend} style={styles.button}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#A57A5A',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    padding: 10,
    backgroundColor: '#A57A5A',
    marginVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-end',
  },
  received: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
});

export default Messages;