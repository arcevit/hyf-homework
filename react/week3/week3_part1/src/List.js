import React from "react";
import Item from "./item";

class List extends React.Component {
  render() {
    const { items, deleteItem, toggleItem, updateItem } = this.props;

    return (
      <ul>
        {items.length > 0 ? (
          items.map(item => (
            <Item
              item={item}
              deleteItem={deleteItem}
              toggleItem={toggleItem}
              updateItem={updateItem}
            />
          ))
        ) : (
          <li>empty please add some items</li>
        )}
      </ul>
    );
  }
}

export default List;
