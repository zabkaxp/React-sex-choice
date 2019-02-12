import React, { Component } from "react";
import "./App.css";
import Data from "./Data";
import Item from "./Item";

class App extends Component {
  state = {
    choice: "all"
  };

  changeState = gender => {
    this.setState({
      choice: gender
    });
  };

  showResults = () => {
    let data = Data.users;
    switch (this.state.choice) {
      case "all":
        return data.map(user => <Item key={user.id} user={user} />);
      case "female":
        data = data.filter(user => user.sex === "female");

        return data.map(user => <Item key={user.id} user={user} />);
      case "male":
        data = data.filter(user => user.sex === "male");

        return data.map(user => <Item key={user.id} user={user} />);
      default:
        return "nie dziala";
    }
  };
  render() {
    return (
      <div>
        <button onClick={() => this.changeState("all")}>All</button>
        <button onClick={() => this.changeState("female")}>Female only</button>
        <button onClick={() => this.changeState("male")}>Male only</button>
        {this.showResults()}
      </div>
    );
  }
}

export default App;
