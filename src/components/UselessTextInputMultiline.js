import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const UselessTextInput = (props) => {
  const [value, onChangeText] = React.useState(props.newValue);
  const changeFunc = (newText) => {
    onChangeText(newText);
    props.onChangeDetailText(newText);
  };
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={500}
      onChangeText={changeFunc}
      value={value}
      style={styles.text}
    />
  );
};

const UselessTextInputMultiline = ({onChangeDetailText, value}) => {
  // If you type something in the text box that is a color, the background will change to that
  // color.

  return (
    <View style={styles.container}>
      <UselessTextInput
        multiline
        numberOfLines={150}
        onChangeDetailText={onChangeDetailText}
        newValue={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 25,
  },
});

export default UselessTextInputMultiline;
