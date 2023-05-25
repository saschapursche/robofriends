import React from "react";
import Card from "./Card";

//react component for the full robots-cardlist which get maped through the card.js object
//to show all robots listed in robots.js object
const CardList = ({ robots }) => {
    return (
    <>
        {
        robots.map((user, i) => {
            return (
                <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                />
                );
            })
        }  
    </>
        );
}

export default CardList;