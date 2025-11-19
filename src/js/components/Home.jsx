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
						text="¡Ka-chow! El corredor más rápido de Radiator Springs."
						btnText="Saber Más de Rayo McQueen"
					/>

					<Cards 
						img="https://static.wikia.nocookie.net/pixar/images/1/1d/Mate_-_Cars_2.png/revision/latest?cb=20160203161410&path-prefix=es"
						title="Mate"
						text="El mejor amigo de McQueen. Grúa oxidada pero con corazón."
						btnText="Saber Más de Mate"
					/>

					<Cards 
						img="https://static.wikia.nocookie.net/pixar/images/7/7b/Sally_Carrera_-_Cars_2.png/revision/latest?cb=20160203161628&path-prefix=es"
						title="Sally"
						text="Abogada de Radiator Springs y la enamorada de McQueen."
						btnText="Saber Más de Sally"
					/>

					<Cards 
						img="https://static.wikia.nocookie.net/disney/images/e/e8/Profile-Doc_hudson.png/revision/latest?cb=20221003162257"
						title="Doc Hudson"
						text="El legendario Hudson Hornet, mentor de McQueen."
						btnText="Saber Más de Doc Hudson"
					/>

				</div>

			</div>

			<Footer />
		</div>
	);
};

export default Home;