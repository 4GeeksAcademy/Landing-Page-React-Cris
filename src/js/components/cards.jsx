import React from "react";

const Cards = ({ img, title, text, btnText }) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 p-3 text-center">
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href="#" className="btn btn-primary">{btnText}</a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
