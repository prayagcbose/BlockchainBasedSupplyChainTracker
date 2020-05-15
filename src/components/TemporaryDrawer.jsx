import React from "react";
import { Drawer, Button } from "@material-ui/core";

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggle = () => {
		setState({ left: !state.left });
		console.log(state);
	};
	return (
		<div>
			<Button onClick={toggle}> Left</Button>
			<Drawer open={state.left} onClose={toggle}>
				Drawer
			</Drawer>
		</div>
	);
}
