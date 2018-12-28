import React from 'react';

class Share extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let isSelected = this.state.isSelected ? false : true;
    this.setState({isSelected});
  }
  
  render() {
    return (
      <div className='share'>
        <span className='share-icon'></span>
        <span className='share-text'>Share</span>
      </div>
    );
  }
}

export default Share;