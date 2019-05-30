import React from "react";
import Item from "./Item";

class List extends React.Component {
  render() {
    const { items, deleteItem } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Users</th>
            <th>Score</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map(item => <Item item={item} deleteItem={deleteItem} />)
          ) : (
            <div> No User Found</div>
          )}
        </tbody>
      </table>
    );
  }
}

export default List;
