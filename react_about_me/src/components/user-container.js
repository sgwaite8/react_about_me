import React from 'react';

class UserContainer extends React.Component {
  constructor(){
    super();
    this.state = {users: []};
  }
  componentDidMount(){
    $.ajax({
      method: 'GET',
      url: '/users',
      dataType: 'json'
    }) .done(function(data){
      this.setState({users: data})
    }.bind(this))
  }
  _addUser(newUser){
    let currentUsers = this.state.users;
    currentUsers.push(newUser);
    this.setState({users: currentUsers});
  }
  render(){
    return (
      <div>
        <UserForm addUser={ this._addUser.bind(this) } />
      </div>
    )
  }
}

export default UserContainer;
