import React, { Component } from "react";

class Item extends Component {
  componentDidMount() {
    console.log("Item: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Item: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Item: componentWillUnmount");
  }

  render() {
    const { item, deleteItem } = this.props;
    return (
      <li key={item.id}>
        {item.login}

        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </li>
    );
  }
}

export default Item;
