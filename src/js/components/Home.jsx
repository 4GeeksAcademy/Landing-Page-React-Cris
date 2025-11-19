import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Container from "./container";

//create your first component
const Home = () => {
	return (
		<div>	
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Container />
					</div>
				</div>

			</div>
		</div>
	);
};

export default Home;