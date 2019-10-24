import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState("Open up App.js to start working on your app!");
  return (
    <View style={{padding: 30}}>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <TextInput 
            placeholder="Course goal" 
            style={{width: '85%', borderBottomColor: 'black', borderBottomWidth: 1, marginBottom:10}}/>
        <Button title="Add" />        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
