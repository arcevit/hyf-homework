import React from "react";

class Header extends React.Component {
  state = {
    inputValue: ""
  };

  inputChangeHandler = e => {
    const newText = e.target.value;
    this.setState({ inputValue: newText });
  };

  clickHandler = () => {
    const { getTodos, loading } = this.props;
    const inputValue = this.state.inputValue;
    loading();
    this.setState({ inputValue: "" });

    getTodos(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <input
          placeholder="add something"
          value={inputValue}
          onChange={this.inputChangeHandler}
        />
        <button onClick={this.clickHandler}>Search</button>
      </div>
    );
  }
}

export default Header;
