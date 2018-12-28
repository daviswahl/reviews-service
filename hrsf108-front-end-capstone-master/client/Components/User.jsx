import React from 'react';

class User extends React.Component{
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className='user'>
        <img className='user-icon' src={this.props.user.image_url}/>
        <div className='username'>{this.props.review.user_name}</div>
        <span className='user-data'>
          <span className='followers-icon'></span>
          <span className='data-text'>{this.props.user.followers}</span>
        </span>
        <span className='user-data'>
          <span className='favorites-icon'></span>
          <span className='data-text'>{this.props.user.favorites}</span>
        </span>
        <span className='user-data'>
          <span className='made-icon'></span>
          <span className='data-text'>{this.props.user.made}</span>
        </span>
      </div>
    );
  }
}

export default User;