import React from 'react';

class Share extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      share: false,
      shareClass: 'share',
      shareIconClass: 'share-icon'
    };
    this.clickShare = this.clickShare.bind(this);
  }

  clickShare() {
    var shareClass,shareIconClass;
    if (this.state.share) {
      shareClass = 'share';
      shareIconClass = 'share-icon';
    } else {
      shareClass = 'share-selected';
      shareIconClass = 'share-icon-selected';
    }
    let share = this.state.share ? false : true;
    this.setState({share, shareClass, shareIconClass});
    this.props.showShareBlock();
  }
  
  render() {
    return (
      <div onClick={this.clickShare} className={this.state.shareClass}>
        <span className={this.state.shareIconClass}></span>
        <span className='share-text'>Share</span>
      </div>
    );
  }
}

export default Share;