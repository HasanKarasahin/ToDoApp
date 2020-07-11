import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';

import Header from '../components/Header';
import InputView from '../components/InputView';
import NavigateText from '../components/NavigateText';
import NavigateButton from '../components/NavigateButton';

const LoginScreen = ({navigation}) => (
  <>
    <StatusBar barStyle="dark-content" />

    <SafeAreaView style={styles.container}>
      <Header title={'Giriş'} />

      <View style={styles.bottomSection}>
        <InputView label={'Kullanıcı Adı'} inputValue={'test1'} />
        <InputView label={'Şifre'} />

        <NavigateText
          navigation={navigation}
          link={'Register'}
          title={'Üye olmak için tıklayın..'}
        />
        <NavigateButton
          navigation={navigation}
          link={'MainScreen'}
          title={'Giriş'}
        />
      </View>
    </SafeAreaView>
  </>
);

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

export default LoginScreen;
