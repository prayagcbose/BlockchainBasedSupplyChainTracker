import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

export default function Test() {
	const [Raised, setRaised] = useState({});
	return (
		<div>
			{["My Products", "My Shipments", "Track Product"].map((text, index) => (
				<Card
					style={{ maxWidth: 250, flexShrink: 1, marginBottom: "10px" }}
					onMouseEnter={() => {
						setRaised({ ...Raised, index: true });
						console.log(index);
					}}
					raised={Raised[index]}
				>
					<CardContent>
						<h1>{text}</h1>
					</CardContent>
				</Card>
			))}
		</div>
	);
}

// <Button
// onClick={() => {
// 	setRaised({ ...Raised, 1: 0 });
// }}
// >
// Add
// </Button>
// <Button
// onClick={() => {
// 	setRaised({ ...Raised, 2: 5 });
// }}
// >
// Add
// </Button>
// {console.log(Raised[1])}
