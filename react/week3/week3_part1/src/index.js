import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import List from "./List";

import "./index.css";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        description: "Get out of bed",
        date: "2017-09-13",
        done: true
      },
      {
        id: 2,
        description: "Brush teeth",
        date: "2017-09-14",
        done: false
      },
      {
        id: 3,
        description: "Eat breakfast",
        date: "2017-09-15",
        done: false
      }
    ]
  };

  counter = 4;

  addItem = (inputValue, dateValue) => {
    const newItem = {
      id: this.counter,
      description: inputValue,
      date: dateValue,
      done: false
    };
    this.counter += 1;
    const newItems = this.state.items.concat(newItem);
    this.setState({ items: newItems });
  };

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  };

  toggleDone = id => {
    const newItems = this.state.items.map(item => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else return item;
    });
    this.setState({ items: newItems });
  };

  updateItem = (id, desc, date) => {
    const newItem = this.state.items.map(p =>
      p.id === id ? { ...p, description: desc, date: date } : p
    );
    this.setState({ items: newItem });
  };

  componentDidMount() {}

  componentDidUpdate() {
    //console.log("App: componentDidUpdate");
    console.log(this.state.items);
  }

  render() {
    //console.log("App: render");
    const { items } = this.state;
    return (
      <div className="app">
        <Header addItem={this.addItem} />

        <List
          items={items}
          deleteItem={this.deleteItem}
          toggleItem={this.toggleDone}
          updateItem={this.updateItem}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
