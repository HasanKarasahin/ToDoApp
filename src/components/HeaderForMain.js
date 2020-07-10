import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function HeaderForMain() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> My Todos </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    paddingTop: 10,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
