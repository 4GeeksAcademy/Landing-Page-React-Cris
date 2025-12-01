import React from "react";
import "../../styles/index.css";

const Cards = ({ img, title, text, btnText }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 p-3 text-center">
            <div className="card h-100 d-flex flex-column">
                <img 
                    src={img}
                    alt={title}
                    className="card-img-top card-img-fixed"
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text flex-grow-1">{text}</p>

                    {/* Botón abajo */}
                    <a href="#" className="btn btn-primary mt-auto">
                        {btnText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
