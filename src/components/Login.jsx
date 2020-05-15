import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
// import { LoginGoogle, LogoutGoogle } from "./Google";

export default function Home() {
	const classes = useStyles();
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
				{/* <Grid item sm={3} className={classes.googleBtn}>
					<LoginGoogle></LoginGoogle>
				</Grid>
				<Grid item sm={3} className={classes.googleBtn}>
					<LogoutGoogle></LogoutGoogle>
				</Grid> */}
			</Grid>
		</div>
	);
}
