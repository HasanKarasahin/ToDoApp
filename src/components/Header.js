import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../img/header.png')}>
        <Text style={styles.text}>{props.title}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
});
