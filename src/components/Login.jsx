import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./style";
import { Link, Redirect } from "react-router-dom";
import firebase from "./FirebaseInit";

//firebase

export default function Login() {
	//firebase
	const [loggedIn, setLoggedIn] = useState(false);
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
				setLoggedIn(true);
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
	//firbase
	const classes = useStyles();
	if (loggedIn) {
		return <Redirect to="/AgroBlocks"></Redirect>;
	}
	return (
		<div className={classes.root}>
			<Grid container className={classes.bg}>
				<Grid item sm={6}>
					<Grid item className={classes.cont1}>
						<h1 className={classes.txt}>Track With BlockChain</h1>
						<p className={classes.txt}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
							recusandae fugit nesciunt eveniet officia, tempora itaque quis
							iste
						</p>
					</Grid>
				</Grid>
				<Grid item sm={6} className={classes.googleBtn}>
					<Button onClick={signIn}>Sign in</Button>
				</Grid>
			</Grid>
		</div>
	);
}
