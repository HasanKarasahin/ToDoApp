import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';

import Header from '../components/Header';
import InputView from '../components/InputView';
import NavigateText from '../components/NavigateText';
import NavigateButton from '../components/NavigateButton';

//Config Firebase
import firebase from 'firebase';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [againPassword, setAgainPassword] = useState(null);

  //TODO input kontrolleri,

  const pressHandle = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Eklendi.');
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header title={'Kayıt'} />

        <View style={styles.bottomSection}>
          <InputView
            label={'E-posta'}
            changeText={(newText) => setEmail(newText)}
          />
          <InputView
            label={'Şifre'}
            changeText={(newText) => setPassword(newText)}
          />
          <InputView
            label={'Şifre Tekrar'}
            changeText={(newText) => setAgainPassword(newText)}
          />

          <NavigateText
            navigation={navigation}
            link={'Login'}
            title={'Zaten üye misin? Girş yapmak için tıkla..'}
          />
          <NavigateButton pressHandle={pressHandle} title={'Kayıt ol'} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  bottomSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RegisterScreen;
