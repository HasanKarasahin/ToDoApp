import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function NavigateButton(props) {
  return (
    <TouchableOpacity
      style={styles.loginBtn}
      onPress={() => {
        props.navigation.navigate(props.link);
      }}>
      <Text style={props.style}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    width: '80%',
    backgroundColor: '#DA17FF',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});
