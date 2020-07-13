import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';

import Header from '../components/Header';
import InputView from '../components/InputView';
import NavigateText from '../components/NavigateText';
import NavigateButton from '../components/NavigateButton';

//Config Firebase
import firebase from 'firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  //TODO input kontrolleri,

  const pressHandle = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        var user = firebase.auth().currentUser;
        navigation.navigate('MainScreen', {
          user: user
        });
      })
      .catch((err) => {
        console.log('Hata Oluştur: B001' + err.message);
      });
  };

  return (
    <>
      <StatusBar backgroundColor="#FFD361" />

      <SafeAreaView style={styles.container}>
        <Header title={'Giriş'} />

        <View style={styles.bottomSection}>
          <InputView
            label={'E-posta'}
            changeText={(newText) => setEmail(newText)}
          />
          <InputView
            label={'Şifre'}
            changeText={(newText) => setPassword(newText)}
          />

          <NavigateText
            navigation={navigation}
            link={'Register'}
            title={'Üye olmak için tıklayın..'}
          />
          <NavigateButton pressHandle={pressHandle} title={'Giriş Yap'} />
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

export default LoginScreen;
