import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import List from "./List";
import "./styles.css";

class App extends Component {
  state = {
    items: [],
    requestState: "search a user name"
  };

  getTodos = input => {
    return fetch(`https://api.github.com/users/${input}`).then(response =>
      response.json().then(body => {
        if (body.message === "Not Found") {
          alert("user not found");
          this.setState({ requestState: "user not found" });
        } else {
          this.setState({
            items: this.state.items.concat(body),
            requestState: "done"
          });
        }
      })
    );
  };
  loading = () => {
    this.setState({ requestState: "loading" });
  };
  searching = () => {
    this.setState({ requestState: "searching" });
  };

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  };

  componentDidMount() {
    console.log("App: componentDidMount");
  }

  componentDidUpdate() {
    console.log("App: componentDidUpdate");
    console.log(this.state.items);
  }

  render() {
    const { items, requestState } = this.state;
    return (
      <div className="app">
        <Header
          getTodos={this.getTodos}
          loading={this.loading}
          searching={this.searching}
        />

        {requestState === "search a user name" ? (
          <p>search a user name....</p>
        ) : requestState === "searching" ? (
          <p>searching....</p>
        ) : requestState === "loading" ? (
          <p>loading....</p>
        ) : (
          <List
            items={items}
            requestState={requestState}
            deleteItem={this.deleteItem}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
