import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header} from './src/components/common';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCkPCgDmDFUlzeyQ24nOsQ4WItVCaYwjB0',
      authDomain: 'authentication-d3606.firebaseapp.com',
      databaseURL: 'https://authentication-d3606.firebaseio.com',
      projectId: 'authentication-d3606',
      storageBucket: 'authentication-d3606.appspot.com',
      messagingSenderId: '90338599576'
    });
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    );
  }
};
