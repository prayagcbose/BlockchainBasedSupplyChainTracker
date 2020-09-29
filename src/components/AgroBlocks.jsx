import React, { useState } from "react";
import firebase from "./FirebaseInit";
import { Redirect } from "react-router-dom";
// temporary darawer
import theme from "../theme";
import MenuIcon from "@material-ui/icons/Menu";

import {
	Drawer,
	Button,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	AppBar,
	IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	paper: {
		background: theme.palette.primary.main,
	},
	btn: {
		color: "white",
	},
	menuButton: {
		marginRight: "90%",
	},
}));
//

export default function AgroBlocks() {
	const [loggedIn, setLoggedIn] = useState(firebase.auth().currentUser);
	//Temporary
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
	});
	{
		console.log(theme);
	}
	const toggle = () => {
		setState({ left: !state.left });
	};
	//

	const signOut = () => {
		firebase
			.auth()
			.signOut()
			.then(function () {
				console.log("signed out");
				setLoggedIn(false);
			})
			.catch(function (error) {
				// An error happened.
			});
	};

	if (loggedIn) {
		console.log("logged in");
		return (
			<div>
				<AppBar variant="static" color="primary">
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={toggle}
					>
						<MenuIcon />
					</IconButton>
				</AppBar>
				<Drawer
					open={state.left}
					anchor="left"
					onClose={toggle}
					classes={{ paper: classes.paper }}
					variant="temporary"
				>
					<List>
						<ListItem button>
							<ListItemText
								primary="Track product"
								className={classes.btn}
							></ListItemText>
						</ListItem>
						<ListItem button>
							<ListItemText
								primary="Add product"
								className={classes.btn}
							></ListItemText>
						</ListItem>
						<ListItem button>
							<ListItemText
								primary="Add Shipment"
								className={classes.btn}
							></ListItemText>
						</ListItem>
						<ListItem button>
							<ListItemText
								primary="Approve Shipment"
								className={classes.btn}
							></ListItemText>
						</ListItem>
						<ListItem button onClick={signOut}>
							<ListItemText
								primary="Log Out"
								className={classes.btn}
							></ListItemText>
						</ListItem>
					</List>
				</Drawer>
			</div>
		);
	} else {
		return <Redirect to="/Login"></Redirect>;
	}
}
