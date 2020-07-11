import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';

export default function InputView(props) {
  const [thisValue, setThisValue] = useState(null);
  return (
    <View style={styles.inputView}>
      <FloatingLabelInput
        label={props.label}
        value={thisValue}
        onChangeText={props.changeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: '80%',
    marginBottom: 20,
    justifyContent: 'center',
  },
});
