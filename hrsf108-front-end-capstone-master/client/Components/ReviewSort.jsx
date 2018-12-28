import React from 'react';

class ReviewSort extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }
 
  clickHandler(e){
    var key = e.target.id;
    console.log('KEY: ', key);
    this.props.sortReviews(key);
  }

  render() {
    return (
    <div className='sort-review'>
      <span id='help' className='sort' onClick={this.clickHandler}>Most helpful</span>
      <span id='pos' className='sort' onClick={this.clickHandler}>Most positive</span>
      <span id='neg' className='sort' onClick={this.clickHandler}>Least positive</span>
      <span id='new' className='sort' onClick={this.clickHandler}>Newest</span>
    </div>
    );
  }
}

export default ReviewSort;