import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetUps from "./components/pages/AllMeetUps";
import Favourite from "./components/pages/Favourite";
import NewMeetUps from "./components/pages/NewMeetUps";
import Layout from "./components/layout/Layout";


function App(props) {
	return (
		<Layout>
			<Switch>
				<Route exact path="/">
					<AllMeetUps />
				</Route>
				<Route path="/new-meetup">
					<NewMeetUps />
				</Route>
				<Route path="/favourite">
					<Favourite />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
