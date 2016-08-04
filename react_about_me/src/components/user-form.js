import React from 'react';

class UserForm extends React.Component {
  _handleSubmit(event){
    event.preventDefault();
    let newUserName = this.refs.newUserName.value;
    let newUserUrl = this.refs.newUserUrl.value;
    let newUserText = this.refs.newUserText.value;
    $.ajax({
      url: 'users',
      method: 'POST',
      data: {name: newUserName, url: newUserUrl, text: newUserText},
      dataType: 'json'
    }) .done(function(data){
      this.props.addUser(data);
      this.refs.newUserName.value = '';
      this.refs.newUserUrl.value = '';
      this.refs.newUserText.value = '';
    }.bind(this))
  }
  render(){
    return (
      <form onSubmit={ this._handleSubmit.bind(this) }>
        <input ref="newUserName" type="text" />
        <input ref="newUserUrl" type="text" />
        <input ref="newUserText" type="text" />
        <input type="submit" value="Add New User" />
      </form>
    )
  }
}

export default UserForm;
