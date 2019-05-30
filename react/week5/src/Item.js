import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Item extends Component {
  render() {
    const { item, deleteItem } = this.props;

    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>
          <Link to={"/" + item.login}>{item.login}</Link>
        </td>
        <td>{item.score}</td>

        <td>
          <img src={item.avatar_url} alt="pic" />
        </td>

        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </tr>
    );
  }
}

export default Item;
