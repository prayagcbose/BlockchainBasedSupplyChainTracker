import React from "react";
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
export default function TemporaryDrawer() {
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
					{[
						"Track product",
						"Add product",
						"Add shipment",
						"Approve Shipment",
						"Log Out",
					].map((text, index) => (
						<ListItem button key={text}>
							<ListItemText
								primary={text}
								className={classes.btn}
							></ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
}
