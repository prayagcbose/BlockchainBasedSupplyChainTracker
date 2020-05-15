import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Grid, makeStyles, Button, Typography } from "@material-ui/core";
import theme from "../theme";
import graph from "../img/graph.png";
import useStyles from "./style";

export default function Home() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container className={classes.bg}>
				<Grid item sm={6}>
					<Grid item className={classes.cont1}>
						<h1 className={classes.txt}>Supply-chain Management</h1>
						<p className={classes.txt}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
							recusandae fugit nesciunt eveniet officia, tempora itaque quis
							iste
						</p>
						<Grid item>
							<Button variant="outlined" color="secondary" size="large">
								<Link to="/AgroBlocks" className={classes.txt}>
									Get Started
								</Link>
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item sm={6}>
					<Grid item>
						<img src={graph} className={classes.img1}></img>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
