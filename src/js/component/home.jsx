import React from "react";
import NavBar from "./NavBar.jsx";
import MainView from "./MainView.jsx"
import Grid from "./Grid.jsx"
import Footer from "./Footer.jsx"

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<MainView />
			<Grid />
			<Footer />

		</div>
	);
}

export default Home;
