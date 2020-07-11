import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainScreen from './src/screens/MainScreen';

//Config Firebase
import firebase from 'firebase';

const App: () => React$Node = () => {
  useEffect(() => {
    var firebaseConfig = {
      apiKey: 'AIzaSyD3ZabJ2ziXlDohaWhpMWVhKHVJRLsF7II',
      authDomain: 'react-native-todoapp-adaa2.firebaseapp.com',
      databaseURL: 'https://react-native-todoapp-adaa2.firebaseio.com',
      projectId: 'react-native-todoapp-adaa2',
      storageBucket: 'react-native-todoapp-adaa2.appspot.com',
      messagingSenderId: '14375703947',
      appId: '1:14375703947:web:fcbbd72b98077c6c948b8e',
      measurementId: 'G-XMG5PDGY4F',
    };
    // Initialize Firebase

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="MainScreen"
          options={{
            headerShown: false,
          }}
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
