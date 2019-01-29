import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
      <View>
        <Text>
          Hello!
        </Text>
      </View>
      </Provider>
    );
  }
};

/*
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default class App extends Component {
  render() {
    return (
    <Provider store = {createStore()}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      </Provider>
    );
  }
};

*/
