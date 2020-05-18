import React from "react";
import firebase from "./FirebaseInit";
import { Redirect } from "react-router-dom";

export default function AgroBlocks() {
	var user = firebase.auth().currentUser;
	if (user) {
		console.log("logged in");
		return (
			<div>
				<h1>AgroBlocks</h1>
			</div>
		);
	} else {
		return <Redirect to="/Login"></Redirect>;
	}
}
