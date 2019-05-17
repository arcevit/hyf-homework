import React from "react";

class Item extends React.Component {
  state = {
    isInEditMode: false
  };
  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  renderDefaultView = () => {
    const { item, toggleItem, deleteItem } = this.props;

    return (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => toggleItem(item.id)}
        />
        <span
          onClick={() => toggleItem(item.id)}
          className={item.done ? "item--checked" : ""}
        >
          {item.description}
        </span>

        <b
          onClick={() => toggleItem(item.id)}
          className={item.done ? "item--checked" : ""}
        >
          &nbsp; &nbsp; &nbsp; &nbsp; {item.date}&nbsp; &nbsp; &nbsp;{" "}
        </b>
        <button onClick={this.changeEditMode}>Edit</button>
        <button onClick={() => deleteItem(item.id)}>Delete</button>
      </li>
    );
  };

  renderEditView = () => {
    const { item } = this.props;
    return (
      <div>
        <label htmlFor="description">Enter Description:</label>
        <input type="text" defaultValue={item.description} ref="textInput" />
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          name="deadline"
          id="deadline"
          defaultValue={item.date}
          ref="timeInput"
        />
        <button onClick={this.changeEditMode}>Cancel</button>
        <button onClick={this.updateComponentValue}>Save</button>
      </div>
    );
  };
  updateComponentValue = () => {
    const { item, updateItem } = this.props;

    this.setState({
      isInEditMode: false
    });
    updateItem(item.id, this.refs.textInput.value, this.refs.timeInput.value);
  };

  //..................................................
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
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default Item;
