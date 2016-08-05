import React from 'react';

class User extends React.Component {
  constructor(){
    super();
    this.state = {display: true};
  }
  _handleClick(){
    var confirmed = confirm("Are you sure you want to delete this user?");
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
      <img src={this.props.url}/>
      <p>{this.props.text}</p>
      <i onClick={ this._handleClick.bind(this) } className="fa fa-trash fa-2x" aria-hidden="true"></i>
    </div>);
    } else {
      return false;
    }
  }
}

export default User;
