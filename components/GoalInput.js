import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

const GoalInput = props => {
    
    // State of enteredGoal (inputted text)
    const [enteredGoal, setEnteredGoal] = useState("");

    // Menangkap setiap perubahan pada TextInput, menempelkannya pada state
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course goal" 
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal} 
            />
            {/* <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)}/> */}
            <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row', 
      justifyContent:'space-between'
    },
    input: {
      width: '85%',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginBottom:10
    }
});
  
  
export default GoalInput;