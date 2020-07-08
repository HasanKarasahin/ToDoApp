import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function NavigateText(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate(props.link);
      }}>
      <Text style={styles.forgot}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  forgot: {
    color: '#000',
    fontSize: 15,
  },
});
