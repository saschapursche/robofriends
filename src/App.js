import React from "react";
import CardList from "./CardList";
import Searchbox from "./Searchbox"
import { robots } from "./robots";

class App extends React.Component {
//this is the part for communication between components
//its saves all changes through the searchbox and the filtered robots
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: "" 
        }
    }
//__Searchbox-Part__
//here get state updated with every input in the searchfield
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }

    render() {
//__CardList-Part__
//depending on searchbox input, robots get filtered
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        
        //Output
        return (
            <div className="tc">
            <h1>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <CardList robots={filterRobots}/>
            </div>
        );
    }
}

export default App;