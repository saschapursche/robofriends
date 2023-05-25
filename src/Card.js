import React from "react";

//a single card which generates random robot img depending on the robots.js name value
//also inserts the name and email from this file
const Card = ({ name, email }) => {
    return (
        <div className= "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt= "robot_photo" src= {`https://robohash.org/${name}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;