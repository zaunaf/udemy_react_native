import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button, Modal } from 'react-native';

const GoalInput = props => {
    
    // State of enteredGoal (inputted text)
    const [enteredGoal, setEnteredGoal] = useState("");

    // Menangkap setiap perubahan pada TextInput, menempelkannya pada state
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText); 
    }

    return (
        <Modal visible={props.visible} animationType="slide">
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
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
      flex:1,      
      justifyContent:'center',
      alignItems: 'center'
    },
    input: {
      width: '85%',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginBottom:10
    }
});
  
  
export default GoalInput;