import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css"

class BoxContainer extends Component {
    //using default props to establish how many boxes we want to display
    static defaultProps = {
        numBoxes: 18,
        allColors: ["purple", "magenta", "violet", "pink"],
          
    }

    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (
            <Box color={this.props.allColors}/>
        ));
        return <div className="BoxContainer">
            {boxes}
        </div>
    }
}

export default BoxContainer;