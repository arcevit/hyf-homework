import React from "react";
import Item from "./Item";

class List extends React.Component {
  render() {
    const { items, deleteItem } = this.props;
    return (
      <ul>
        {items.length > 0 ? (
          items.map(item => <Item item={item} deleteItem={deleteItem} />)
        ) : (
         <div> No item left</div>
        )}
      </ul>
    );
  }
}

export default List;
