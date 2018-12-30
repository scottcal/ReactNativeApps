import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, Spinner, CardSection, Card } from './src/components/common';
import LoginForm from './src/components/LoginForm';
//don't remember why I added the next line
//import { userInfo } from 'os';

export default class App extends Component {

  state = { loggedIn : null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCkPCgDmDFUlzeyQ24nOsQ4WItVCaYwjB0',
      authDomain: 'authentication-d3606.firebaseapp.com',
      databaseURL: 'https://authentication-d3606.firebaseio.com',
      projectId: 'authentication-d3606',
      storageBucket: 'authentication-d3606.appspot.com',
      messagingSenderId: '90338599576'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState ({loggedIn : true });
      } else {
        this.setState ({ loggedIn : false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </ CardSection> 
          
          );
      case false:
        return <LoginForm />;
      default:
        return <View style={styles.SpinnerStyle}><Spinner size="large" /></View>
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
        {console.log(this.state.loggedIn)}
      </View>
    );
  }
}

const styles = {
  SpinnerStyle: {
    marginTop: 40,
    }
}

