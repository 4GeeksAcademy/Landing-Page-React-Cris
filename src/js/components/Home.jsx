import React from "react";
import Navbar from "./Navbar";
import Container from "./container";
import Cards from "./cards";
import Footer from "./footer";

const Home = () => {
	return (
		<div className="aling-items-center">	
			<Navbar />
			<div className="container">
				<Container />

				<div className="row">

					<Cards 
						img="https://cdn-images.motor.es/image/m/1320w/fotos-noticias/2020/03/que-coche-es-rayo-mcqueen-202066150-1585635516_1.jpg"
						title="Rayo McQueen"
						text="Un veloz coche de carreras apasionado y competitivo que aprende el valor de la amistad y la humildad mientras busca convertirse en una verdadera leyenda."
						btnText="Saber Más de Rayo McQueen"
					/>

					<Cards 
						img="https://static.wikia.nocookie.net/pixar/images/1/1d/Mate_-_Cars_2.png/revision/latest?cb=20160203161410&path-prefix=es"
						title="Mate"
						text="Una grúa oxidada pero leal, divertida y de gran corazón, siempre dispuesto a ayudar y a sacar una sonrisa con su humor inocente."
						btnText="Saber Más de Mate"
					/>

					<Cards 
						img="https://static.wikia.nocookie.net/pixar/images/7/7b/Sally_Carrera_-_Cars_2.png/revision/latest?cb=20160203161628&path-prefix=es"
						title="Sally"
						text="Un elegante Porsche azul, inteligente y amable, que actúa como guía y apoyo para McQueen mientras protege el encanto de Radiator Springs."
						btnText="Saber Más de Sally"
					/>

					<Cards 
						img="https://static.wikia.nocookie.net/disney/images/e/e8/Profile-Doc_hudson.png/revision/latest?cb=20221003162257"
						title="Doc Hudson"
						text="Un coche sabio y reservado con un pasado glorioso en las pistas, que se convierte en mentor de McQueen y en el pilar moral del pueblo."
						btnText="Saber Más de Doc Hudson"
					/>

				</div>

			</div>

			<Footer />
		</div>
	);
};

export default Home;