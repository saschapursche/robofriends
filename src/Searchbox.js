import React from "react";

//simple searchbox function
const Searchbox = ({ searchChange }) => {
    return (
        <div className="pa2">
        <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robotname"
        onChange={searchChange}
        />
        </div>
    )
}

export default Searchbox;