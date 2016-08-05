import React from 'react';
import User from './user';

class UserList extends React.Component {
  render(){
    return(
      <div>
        { this.props.users.map((user, index) => <User userId={user._id} key={index} name={user.name} url={user.url} text={user.text}/>)}
      </div>
    )
  }
}

export default UserList;
