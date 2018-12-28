import React from 'react';

class ShortUser extends React.Component{
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className='user'>
        <img className='user-icon' src={this.props.user.image_url}/>
        <div className='username'>{this.props.user.user_name}</div>
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

export default ShortUser;