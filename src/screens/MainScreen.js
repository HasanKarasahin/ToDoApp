import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';

import HeaderForMain from '../components/HeaderForMain';
import ToDoItem from '../components/ToDoItem';
import AddToDo from '../components/AddToDo';

let MainScreen;
export default MainScreen = () => {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const deletePressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const addPressHandler = (text) => {
    setTodos((prevTodos) => {
      return [{text: text, key: Math.random().toString()}, ...prevTodos];
    });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <HeaderForMain />

        <View style={styles.content}>
          <AddToDo addPressHandler={addPressHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <ToDoItem item={item} deletePressHandler={deletePressHandler} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59afc4',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 10,
  },
});
