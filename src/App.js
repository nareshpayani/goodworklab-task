import React, { Component } from "react";
import Message from "./components/Message";
import Flexi from "./components/Flexi";
import './App.css';


const flexConfig = {
  items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type": 'TextField',
      },
      {
        "name": "states",
        "label": "Person' state",
        "type": "DropDown",
            "values": [
              "Karnatak",
              "Maharashtra",
              "Kerala",
              "Tamil Nadu"
            ]
      }
    ]
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      place: 'somewhere',      
    };
  }

  onFlexSubmit = (val) => {
    this.setState({ name: val.name, place: val.place });
  }

  render() {
    return (
      <div className="wrapper">
        
        <Flexi onSubmit={this.onFlexSubmit} config={flexConfig.items} />
        <Message name={this.state.name} place={this.state.place} />
      </div>
    );
  }
}

export default App;
