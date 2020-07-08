import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import Header from '../components/Header';
import InputView from '../components/InputView';
import NavigateText from '../components/NavigateText';
import NavigateButton from '../components/NavigateButton';

export default class RegisterScreen extends React.Component {

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Header title={'Kayıt'} />

          <View style={styles.bottomSection}>
            <InputView label={'Kullanıcı Adı'} />
            <InputView label={'Şifre'} />
            <InputView label={'Şifre Tekrar'} />

            <NavigateText
              navigation={this.props.navigation}
              link={'Login'}
              title={'Zaten üye misin? Girş yapmak için tıkla..'}
            />
            <NavigateButton
              navigation={this.props.navigation}
              link={'MainScreen'}
              title={'Kayıt ol'}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

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
