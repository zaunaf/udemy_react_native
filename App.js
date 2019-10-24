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
      <View style={{flexDirection:"row", width: "80%", height:300}}>
        <View style={{backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
            <Text>1</Text>
        </View>
        <View style={{backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
            <Text>2</Text>
        </View>
        <View style={{backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
            <Text>3</Text>
        </View>
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
