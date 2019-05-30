import React from "react";

function UserProfile(props) {
  return (
    <div className="user">
      <h1>Name:{props.user.name?(<b>{props.user.name}</b>):(<b>Anonuymous</b>)}</h1>
      <img src={props.user.avatar_url} alt="" />
      <h4>User Name:{props.user.login}</h4>
      <h4>Location:{props.user.location?(<span>{props.user.location}</span>):(<span>Not Mention</span>)}</h4>
      <h4>Hireable status:{props.user.hireable?(<span>Yes</span>):(<span>No</span>)}</h4>
      <h4>Company:{props.user.company?(<span>{props.user.company}</span>):(<span>Not Mention</span>)}</h4>
      <h4>Description {props.user.bio?(<p>{props.user.bio}</p>):(<p>No description</p>)}</h4>
    
    </div>
  );
}

export default UserProfile;
