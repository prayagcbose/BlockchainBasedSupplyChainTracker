import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Button } from "@material-ui/core";

export default function Firebase() {
	var firebaseConfig = {
		apiKey: "AIzaSyCIqA3zZDQ2dM-BB7ENp9WT-McHaU3Wmi0",
		authDomain: "agroblockstest-1583987257159.firebaseapp.com",
		databaseURL: "https://agroblockstest-1583987257159.firebaseio.com",
		projectId: "agroblockstest-1583987257159",
		storageBucket: "agroblockstest-1583987257159.appspot.com",
		messagingSenderId: "260182571193",
		appId: "1:260182571193:web:42fdd184c9614ef0cc4368",
		measurementId: "G-RP33GJJCF3",
	};
	firebase.initializeApp(firebaseConfig);
	var provider = new firebase.auth.GoogleAuthProvider();
	// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
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
			<Button onClick={signOut} style={{ marginTop: "5rem" }}>
				SignOut
			</Button>
			<Button onClick={signIn}>SignIn</Button>
		</div>
	);
}
