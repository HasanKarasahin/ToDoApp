import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function ToDoItem({item, deletePressHandler}) {
  return (
    <TouchableOpacity onPress={() => deletePressHandler(item.key)}>
      <Text style={styles.item}> {item.text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});
