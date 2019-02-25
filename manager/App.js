import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  componentWillMount() {
      const config = {
      apiKey: 'AIzaSyDLeCeR2bc_SUJ5bIM5y19ApJyz1rJu_Sc',
      authDomain: 'manager-ced17.firebaseapp.com',
      databaseURL: 'https://manager-ced17.firebaseio.com',
      projectId: 'manager-ced17',
      storageBucket: 'manager-ced17.appspot.com',
      messagingSenderId: '174152235896'
    };
    firebase.initializeApp(config);
  
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
};

