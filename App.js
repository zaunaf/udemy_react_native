import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Open up App.js to start working on your app!");
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
            placeholder="Course goal" 
            style={styles.input}/>
        <Button title="Add" />        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent:'space-between'
  },
  input: {
    width: '85%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom:10
  },
  
});
