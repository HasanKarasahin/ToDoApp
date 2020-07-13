import React, {useState, useEffect, useRef, Component} from 'react';
import {SafeAreaView, StyleSheet, Alert, TextInput} from 'react-native';

//Config Firebase
import firebase from 'firebase';
import HeaderForDetails from '../components/HeaderForDetails';
import Snackbar from 'react-native-snackbar';

var item_id_global = 0;
var userId_global = 0;
class ToDoDetailsScreen extends Component {
  constructor(props) {
    super(props);
    const {user, navigate} = props.route.params;

    this.state = {
      text_title: '',
      current_detail: '',
    };
  }

  backFunc = () => {
    const {
      navigation: {goBack},
    } = this.props;

    goBack();
  };

  saveFunc = () => {
    firebase
      .database()
      .ref(`/posts/${userId_global}` + '/' + item_id_global + '/detail')
      .set(this.state.current_detail)
      .then(function () {
        Snackbar.show({
          text: 'Kaydedildi.',
          duration: Snackbar.LENGTH_SHORT,
        });
      })
      .catch(function (error) {
        Alert.alert('Bir hata oluştu..' + error.message);
      });
  };

  onChangeDetailText = (newText) => {
    this.setState({new_detail: newText});
  };

  componentDidMount() {
    const obj = this;

    const {item_id, userId} = this.props.route.params;

    item_id_global = item_id;
    userId_global = userId;

    firebase
      .database()
      .ref(`/posts/${userId}` + '/' + item_id + '/')
      .once('value')
      .then(function (snapshot) {
        if (snapshot.val() && snapshot.val().text) {
          obj.setState({text_title: snapshot.val().text});

          if (snapshot.val().detail) {
            obj.setState({current_detail: snapshot.val().detail});
          }
        } else {
          Alert.alert('Problem');
        }
      })
      .catch(function (error) {
        Alert.alert('There has been a problem with your fetch operation');
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
      });
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <HeaderForDetails
            title={this.state.text_title}
            backFunc={this.backFunc}
            saveFunc={this.saveFunc}
          />
          <TextInput
            onChangeText={(newText) => {
              this.setState({current_detail: newText});
            }}
            value={this.state.current_detail}
            style={styles.text}
            placeholder="Detay giriniz.."
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 25,
  },
});

export default ToDoDetailsScreen;
