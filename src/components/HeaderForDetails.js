import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function HeaderForDetails({title, backFunc, saveFunc}) {


  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn_back} onPress={backFunc}>
        <Text style={styles.title}> Geri</Text>
      </TouchableOpacity>
      <Text style={styles.title}> {title} </Text>
      <TouchableOpacity style={styles.btn_save} onPress={saveFunc}>
        <Text style={styles.title}>Kaydet </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingTop: 10,
    backgroundColor: '#FFD361',
  },
  btn_back: {
    paddingLeft: 5,
  },
  btn_save: {
    paddingRight: 5,
  },
  title: {
    textAlign: 'center',
    color: '#965A2C',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
