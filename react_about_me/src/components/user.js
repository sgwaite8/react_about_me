import React from 'react';

class User extends React.Component {
  render(){
    return (
    <div>
      <h3>{this.props.name}</h3>
      <h3>{this.props.url}</h3>
      <h3>{this.props.text}</h3>
    </div>
    );
  }
}

export default User;
