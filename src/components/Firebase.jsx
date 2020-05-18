import React from "react";
import { Button } from "@material-ui/core";
import firebase from "./FirebaseInit";

export default function Firebase() {
	var provider = new firebase.auth.GoogleAuthProvider();
	const signIn = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = result.credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				console.log(user.email);
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	};
	const signOut = () => {
		firebase
			.auth()
			.signOut()
			.then(function () {
				console.log("signed out");
			})
			.catch(function (error) {
				// An error happened.
			});
	};
	return (
		<div>
			<Button onClick={signIn}>signin</Button>
		</div>
	);
}
