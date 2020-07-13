import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function HeaderForMain({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> {title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    paddingTop: 10,
    backgroundColor: '#FFD361',
  },
  title: {
    textAlign: 'center',
    color: '#965A2C',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
