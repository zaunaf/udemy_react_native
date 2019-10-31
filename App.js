import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  // State of courseGoals list
  const [courseGoals, setCourseGoals] = useState([]);

  // Modal state
  const [isAddMode, setIsAddMode] = useState(false);

  // Menangkap aksi Add dan menambahkan isi TextInput ke list courseGoals
  const addGoalHandler = goalTitle => {
    // console.log(enteredGoal);
    // setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={()=>setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id}
            onDelete={removeGoalHandler}  
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
