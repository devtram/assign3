import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import {
Header,
CustomButton,
CardSection,
Card,
Spinner, LoginForm //// Import our LoginForm component to be displayed on the screen

} from "./common";

class App extends Component {


    
state = { loggedIn: null };
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
    apiKey: "AIzaSyBMMOJXeaxE-0cCdfblSSPDwTms1s0KGpM",
    authDomain: "rnapp-auth-class-tayyab.firebaseapp.com",
    databaseURL: "https://rnapp-auth-class-tayyab.firebaseio.com",
    projectId: "rnapp-auth-class-tayyab",
    storageBucket: "rnapp-auth-class-tayyab.appspot.com",
    messagingSenderId: "586672115417"
});

//Handle the Application when it's logged in or logged out
firebase.auth().onAuthStateChanged(user => {
if (user) {
this.setState({ loggedIn: true });
} else {
this.setState({ loggedIn: false });
}
});
}




renderContent() {
switch (this.state.loggedIn) {
case true:
return (
<Card>
<CardSection>
<CustomButton onPress={() => firebase.auth().signOut()}>
Logout
</CustomButton>
</CardSection>
</Card>
);
case false:
return <LoginForm />;
default:
return <Spinner size="large" />;
}
}
render() {
return (
<View>
<Header headerText="Authentication" />
{this.renderContent()}
{/* 
Before the renderContent Handling
<LoginForm /> */}
</View>
);
}
}


export default App;
