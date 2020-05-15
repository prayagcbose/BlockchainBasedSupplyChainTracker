import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Home from "./components/Home";
import AgroBlocks from "./components/AgroBlocks";
import NavBar from "./components/NavBar";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import TemporaryDrawer from "./components/TemporaryDrawer";
import Firebase from "./components/Firebase";

export default function App() {
	return (
		<React.Fragment>
			<Router>
				<NavBar></NavBar>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/About" component={About}></Route>
					<Route path="/Login" component={Login}></Route>
					<Route path="/AgroBlocks" component={AgroBlocks}></Route>
					<Route path="/ResponsiveDrawer" component={ResponsiveDrawer}></Route>
					<Route path="/TemporaryDrawer" component={TemporaryDrawer}></Route>
					<Route path="/Firebase" component={Firebase}></Route>
				</Switch>
			</Router>
		</React.Fragment>
	);
}
