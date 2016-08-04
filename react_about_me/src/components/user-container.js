import React from 'react';
import UserForm from './user-form';
import UserList from './user-list';

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
        <UserList users={ this.state.users } />
      </div>
    )
  }
}

export default UserContainer;
