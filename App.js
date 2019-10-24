import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, FlatList, Button } from 'react-native';

export default function App() {
  // State of enteredGoal (inputted text)
  const [enteredGoal, setEnteredGoal] = useState("");
  
  // State of courseGoals list
  const [courseGoals, setCourseGoals] = useState([]);

  // Menangkap setiap perubahan pada TextInput, menempelkannya pada state
  const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
  }

  // Menangkap aksi Add dan menambahkan isi TextInput ke list courseGoals
  const addGoalHandler = () => {
    // console.log(enteredGoal);
    // setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { key: Math.random().toString(), value: enteredGoal }
    ]);
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
      <FlatList
        data={courseGoals}
        renderItem={itemData =>(
          <View 
              style={styles.listItem}
              key={itemData.item.key}>
              <Text>{itemData.item.value}</Text>
            </View>
        )}/>
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
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
