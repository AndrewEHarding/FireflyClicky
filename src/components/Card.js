import React from "react";
import "./Card.css";

const Card = props => {
    return (
        <div className="card">
            <div className="card-body">
                <img alt={props.name} src={props.img} />
            </div>
        </div>
    );
};

export default Card;