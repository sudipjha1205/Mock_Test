import React from "react";
import background from "../../template/1.jpg";

import "./Home.css";

const Home = () => {
	return(
		<div className="ui container">
			<div className = "center">
				<div className = "big-logo">MT</div>
				<div className = "intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.</div>
				<button className = "button">Get Started</button>
			</div>
		</div>
	)
};

export default Home;
