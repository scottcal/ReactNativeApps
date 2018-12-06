import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './src/components/common'

export default class App extends Component {
  render() {

    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Open up App.js to start working on your app! 1</Text>
      </View>
    );
  }
};
