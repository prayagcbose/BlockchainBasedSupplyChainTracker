import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../img/logo1.png";
const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	logo: {
		width: "200px",
	},
	navLink: {
		fontSize: ".8rem",
		fontFamily: "Montserrat",
		color: "white",
		textTransform: "none",
		textDecoration: "none",
	},
});
export default function NavBar() {
	const classes = useStyles();

	return (
		<AppBar position="static" color="primary" style={{ padding: "0 5%" }}>
			<Toolbar>
				<Grid container className={classes.title}>
					<img src={Logo} className={classes.logo}></img>
				</Grid>
				<Link to="/" style={{ textDecoration: "none" }}>
					<Button className={classes.navLink}>Home</Button>
				</Link>
				<Link to="/AgroBlocks" style={{ textDecoration: "none" }}>
					<Button className={classes.navLink}>App</Button>
				</Link>
				<Link to="/About" style={{ textDecoration: "none" }}>
					<Button className={classes.navLink}>About</Button>
				</Link>
				<Link to="/Login" style={{ textDecoration: "none" }}>
					<Button className={classes.navLink}>Login</Button>
				</Link>
			</Toolbar>
		</AppBar>
	);
}
