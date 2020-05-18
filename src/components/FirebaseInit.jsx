import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

export default firebase;
