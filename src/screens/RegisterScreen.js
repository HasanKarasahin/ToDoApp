import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';

import Header from '../components/Header';
import InputView from '../components/InputView';
import NavigateText from '../components/NavigateText';
import NavigateButton from '../components/NavigateButton';
import Snackbar from 'react-native-snackbar';

import firebase from 'firebase';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [againPassword, setAgainPassword] = useState(null);

  //TODO input kontrolleri,

  const pressHandle = () => {
    let errMsj = '';
    if (!email || !email.trim()) {
      errMsj = 'E-mail alanı boş\n';
    }
    if (!password || !password.trim()) {
      errMsj += 'Şifre alanı boş\n';
    }
    if (!againPassword || !againPassword.trim()) {
      errMsj += 'Şifre Tekrar alanı boş\n';
    }

    if (!(password == againPassword)) {
      errMsj += 'Şifre ve Şifre Tekrarı bilgisi aynı degil.';
    }

    if (errMsj) {
      Snackbar.show({
        text: errMsj,
        duration: Snackbar.LENGTH_LONG,
      });
      return;
    }

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

        Snackbar.show({
          text: 'Lütfen girdiginiz bilgileri kontrol ediniz.\n' + error.message,
          duration: Snackbar.LENGTH_LONG,
        });
        return;
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
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RegisterScreen;
