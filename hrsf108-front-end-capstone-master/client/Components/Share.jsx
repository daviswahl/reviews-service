import React from 'react';

class Share extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      share: false,
      shareStyle: {},
      shareIcon: {}
    };
    this.clickShare = this.clickShare.bind(this);
  }

  clickShare() {
    var shareStyle,shareIcon;
    if (this.state.share) {
      shareStyle = {backgroundColor:'#fff', borderColor:'#cfcfcf'};
      shareIcon = {backgroundPosition: '90.8641975308642% 37.11570709893796%'};
    } else {
      shareStyle = {backgroundColor:'#ff7e1a',borderColor:'#ff7e1a'};
      shareIcon = {backgroundPosition: '98.87996104212321% 28.228195282501364%',transform: 'scale(.9, .9)',position:'absolute'};
    }
    let share = this.state.share ? false : true;
    this.setState({share, shareStyle, shareIcon});
  }
  
  render() {
    return (
      <div onClick={this.clickShare} style={this.state.shareStyle} className='share'>
        <span style={this.state.shareIcon} className='share-icon'></span>
        <span className='share-text'>Share</span>
      </div>
    );
  }
}

export default Share;