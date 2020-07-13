import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function AddToDo({addPressHandler}) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Hatırlatma Başlıgı"
        onChangeText={changeHandler}
      />

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => addPressHandler(text)}
        style={styles.btn}>
        <Text style={styles.titleText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  input: {
    flex: 5,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#bd4242',
  },
  titleText: {
    color: '#966817',
    fontSize: 20,
  },
  btn: {
    flex: 1,
    padding: 10,
  },
});
