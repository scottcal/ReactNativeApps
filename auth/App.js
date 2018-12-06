import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/components/common';
import firebase from firebase;

export default class App extends Component {
  componentWillMount() {
    firebase.initalizeApp({
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
        <Text>Open up App.js to start working on your app! 1</Text>
      </View>
    );
  }
};
