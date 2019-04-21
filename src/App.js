
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {LoginForm} from "./common";

import firebase from "firebase";




export default class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDhdYwgY_0XhgtG_FPXL3Brz4KpyXt4dzg",
    authDomain: "myfirstapp-a02b1.firebaseapp.com",
    databaseURL: "https://myfirstapp-a02b1.firebaseio.com",
    projectId: "myfirstapp-a02b1",
    storageBucket: "myfirstapp-a02b1.appspot.com",
    messagingSenderId: "404810988271"
        });
    }

    render() {
    return (

        <View>
          <Text>asdfsdfsdaf hello</Text>
          <LoginForm/>
        </View>


    );
  }
}

