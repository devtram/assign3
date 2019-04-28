OnPress:
A state, does signOut using firebase api within App.js
              sigin   using firebase api wihtin LoginForm.js
              using onButtonPress() in this method firebase api authentication promise method called
	      onButtonPress(): also set  email, password as state with this.state;
              -> has method onLoginFailed(), onLoginSuccess() defines two states, which used within firebase authentication proisemethod 

		Within Firebase Promise method:
		signInWithEmailAndPassword(): takes email, password returns from onLoginSuccess
		createUserWithEmailAndPassword():  other catches error returns from either onLoginSuccess onLoginFailed


		Within App.js
		firebase auth().onAuthStateChanged() has a Conditional method called to render screen based (or switch b/w screens) on state defined 'loggedIn' with renderContent() method 

			


4) Identify the following items in your code:

11. Let's Login our User :)
onPress prop for Button control needs to be configured

Promises are used for asynchronous actions required in an app
firebase.auth().signIn
With...
firebase.auth().createUserWith...
Please remember that password should be atleast 6 chars or else the user creation might fail
//Helper method onButtonPress() v 1.0() to Login the user
onButtonPress() {
const { email, password } = this.state;
//Firebase mathod to login using userid & password

//Clear out the Error Message on Every Login Attempt
this.setState({ error: "" });

firebase
.auth()
.signInWithEmailAndPassword(email, password)
.catch(() => {
firebase
.auth()
.createUserWithEmailAndPassword(email, password)
.catch(() => {
this.setState({ error: "Authentication Failed" });
});
});
}

12. Now when the app is working as per our current logic we need to add a spinner to display decent bg process so add a custom component in order to re-use the spinner. Make an Activity Spinner

13. Apply the Spinner on every button click before the content needs to appear. Create a renderButton() method and call it inplace of <CustomButton> component (This is called the conditional rendering of the JSX)
14. Now we need to handle when the Spinner needs to go away.
Let's create an onLoginSuccess() methhod and do the following:
Make the loading status false
Clear the form as values are still visible
Clear the Error message if it's still appearing
and call the above method in the onButtonPress() method after every happy flow

15. Now we need to create onLoginFailed() method to do similar items in and bind it when we have a error case

16. Now another conditional rendering case to be handled from the App level; i.e. When user is logged in we need to show logout option rather than LoginForm otherwise by default the signup plus login form has to appear
firebase.auth().onAuthStateChanged()...

17. Use switch case of handle the three loggedIn or loggedOut or something in between on the main form

18. Functionality to Logout

//Summary
Configuration to Connect to Firebase
Handle the TextInput from the Login Form using State in LoginForm
Handle Spinner Login using Conditional Formating of JSX while rendering
Handle Similar Situation of Conditional Formating at AppLevel based on LoggedIn Info
Handle to Logout logic at App Level

5) Please make sure you are using your university ID for GitHub.com and Firebase Console to create your projects and repositories.
	           
