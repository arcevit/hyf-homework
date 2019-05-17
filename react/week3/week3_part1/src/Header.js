import React from "react";

class Header extends React.Component {
  state = {
    inputValue: "",
    dateValue: ""
  };

  clickHandler = () => {
    const inputValue = this.state.inputValue;
    const dateValue = this.state.dateValue;
    this.setState({ inputValue: "" });
    this.props.addItem(inputValue, dateValue);
  };

  render() {
    const { inputValue, dateValue } = this.state;
    return (
      <div>
        <label htmlFor="description">Enter Description:</label>
        <input
          type="text"
          placeholder="add something"
          value={inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
        />
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          name="deadline"
          id="deadline"
          value={dateValue}
          onChange={e => this.setState({ dateValue: e.target.value })}
        />
        <button onClick={this.clickHandler}>ADD</button>
      </div>
    );
  }
}

export default Header;
