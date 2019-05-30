import React, { Component } from "react";
import UserProfile from "./UserProfile";

class User extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    let user = this.props.match.params.user_name;
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(body => this.setState({ user: body }));
  }

  render() {
    
    const { user } = this.state;
    
    const post = user ? (
      <UserProfile user={user} />
    ) : (
      <h3>user profile is going to be displayed....</h3>
    );
    return <div>{post}</div>;
  }
}

export default User;
