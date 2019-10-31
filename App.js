import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  // State of courseGoals list
  const [courseGoals, setCourseGoals] = useState([]);

  // Menangkap aksi Add dan menambahkan isi TextInput ke list courseGoals
  const addGoalHandler = goalTitle => {
    // console.log(enteredGoal);
    // setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id}
            onDelete={()=> console.log("Delete kicked!")}  
            value={itemData.item.value} />
        )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
