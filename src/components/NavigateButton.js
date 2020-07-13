import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function NavigateButton(props) {
  return (
    <TouchableOpacity style={styles.loginBtn} onPress={props.pressHandle}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    backgroundColor: '#ffd361',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: '#966817',
    fontSize: 30,
  },
});
