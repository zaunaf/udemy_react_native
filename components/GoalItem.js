import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

const GoalItem = props => {
    return (
      <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
          <Text>{props.value}</Text>
        </View>
      </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
});
  
export default GoalItem;