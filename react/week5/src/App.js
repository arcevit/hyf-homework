import React, { Component } from "react";
import Header from "./Header";
import List from "./List";
import "./styles.css";

class App extends Component {
  state = {
    items: [],
    requestState: "search a user name"
  };

  getTodos = input => {
    return fetch(`https://api.github.com/search/users?q=${input}`).then(
      response =>
        response.json().then(body => {
          if (body.message === "Not Found") {
            alert("user not found");
            this.setState({ requestState: "user not found" });
          } else {
            this.setState({
              items: body.items,
              requestState: "done"
            });
          }
        })
    );
  };

  loading = () => {
    this.setState({ requestState: "loading" });
  };

  deleteItem = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  };

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

export default App;
