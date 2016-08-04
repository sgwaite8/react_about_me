import React from 'react';

class User extends React.Component {
  constructor(){
    super();
    this.state = {display: true};
  }
  _handleClick(){
    var confirmed = confirm("Are you sure?");
    if (confirmed){
      $.ajax({
        method: 'DELETE',
        url: '/users/' + this.props.userId,
        dataType: 'json'
      })
        .done(function(data){
          this.setState({display: false});
        }.bind(this));
    }
  }
  render(){
    if (this.state.display) {
      return (
    <div>
      <h3>{this.props.name}</h3>
      <h3>{this.props.url}</h3>
      <h3>{this.props.text}</h3>
      <i onClick={ this._handleClick.bind(this) } className="fa fa-trash" aria-hidden="true"></i>
    </div>);
    } else {
      return false;
    }
  }
}

export default User;
