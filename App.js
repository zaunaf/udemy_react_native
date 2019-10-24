import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
  }
  const addGoalHandler = () => {
    console.log(enteredGoal);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
            placeholder="Course goal" 
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler}/>
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
