import React, {Component} from 'react';
import {Alert, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import HeaderForMain from '../components/HeaderForMain';
import AddToDo from '../components/AddToDo';
import ToDoItem from '../components/ToDoItem';
import CustomModal from '../components/CustomModal';
import firebase from 'firebase';
import Snackbar from 'react-native-snackbar';

var selectedItem = null;
class MainScreen extends Component {
  constructor(props) {
    super(props);
    const {user} = props.route.params;

    this.state = {
      todos: [],
      userId: user.uid,
      modal: false,
    };
  }

  componentDidMount() {
    const obj = this;
    firebase
      .database()
      .ref(`/posts/${this.state.userId}` + '/')
      .once('value')
      .then(function (snapshot) {
        snapshot.forEach((item) => {
          if (item.val() && item.val().text) {
            var newData = [...obj.state.todos];

            const testData = {
              text: item.val().text,
              item_id: item.val().item_id,
            };

            newData.push(testData);

            obj.setState({todos: newData});
          }
        });
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
      });
  }

  addPressHandler = (text) => {
    const obj = this;

    if (!text) {
      return;
    }

    var newPostKey = Date.now();

    var postData = {
      text: text,
      item_id: newPostKey,
    };

    firebase
      .database()
      .ref('posts/' + this.state.userId + '/' + newPostKey + '/')
      .set(postData);

    var newData = [postData];
    newData.push(...obj.state.todos);

    obj.setState({todos: newData});
  };

  deletePressHandler = (item_id) => {
    selectedItem = item_id;
    this.setState({modal: true});
  };

  toggleModal = () => {
    this.setState({
      modal: false,
    });
  };

  approveModal = () => {
    if (selectedItem) {
      this.setState({
        todos: this.state.todos.filter((todo) => todo.item_id != selectedItem),
      });

      var adaRef = firebase
        .database()
        .ref('/posts/' + this.state.userId + '/' + selectedItem);
      adaRef
        .remove()
        .then(function () {
          Snackbar.show({
            text: 'Silindi',
            duration: Snackbar.LENGTH_SHORT,
          });
        })
        .catch(function (error) {
          Alert.alert('Bir hata oluştu..' + error.message);
        });
    }

    this.setState({
      modal: false,
    });
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <HeaderForMain />
          <CustomModal
            visible={this.state.modal}
            onApprove={this.approveModal}
            onClose={this.toggleModal}
          />
          <View style={styles.content}>
            <AddToDo addPressHandler={this.addPressHandler} />
            <View style={styles.list}>
              <FlatList
                data={this.state.todos}
                renderItem={({item}) => (
                  <ToDoItem
                    item={item}
                    deletePressHandler={this.deletePressHandler}
                  />
                )}
                keyExtractor={(item) => item.item_id}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#e5e2e2',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
});

export default MainScreen;
