import React from "react";

const Header = props => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Firefly Clicky Game</h1>
            <h2>You Can't Take the Sky From Me...</h2>
            <p className="lead">Welcome to the Firefly Clicky Game! The object of the game is to click the portrait of each character once. The trick is that every time you click a portrait, they’re all randomized. Memory is key if you want a high score. Good luck!</p>
            <hr className="my-4" />
            <p>Current Score: {props.score} Top Score: {props.topScore}</p>
        </div>
    );
};

export default Header;