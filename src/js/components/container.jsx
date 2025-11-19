import React from "react";

const Container = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide pt-3">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://variety.com/wp-content/uploads/2016/06/cars.jpg?w=1000&h=563&crop=1" className="d-block w-100" alt="cars photo 1" />
                </div>
                <div className="carousel-item">
                    <img src="https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/22336667/cars_2.0.jpg?w=1600&h=900&fit=crop" className="d-block w-100" alt="cars photo 2" />
                </div>
                <div className="carousel-item">
                    <img src="https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/04/7a1228fcef268bbaf3800d977327f8e7_1280x720.jpg?t=1643484317" className="d-block w-100" alt="cars photo 3" />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Container;
