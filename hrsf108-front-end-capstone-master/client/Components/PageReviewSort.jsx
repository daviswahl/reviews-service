import React from 'react';

class PageReviewSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidUpdate() {
    let elements = document.getElementsByClassName('page-sort');
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].id === this.state.selected) {
        elements[i].style['background-color'] = '#f2f2f2';
        elements[i].style.color = '#2d2d2d';
      } else {
        elements[i].style['background-color'] = '#dbdbda';
        elements[i].style.color = '#666';
      }
    }
  }
 
  clickHandler(e){
    var selected = e.target.id;
    this.props.sortReviews(selected);
    this.setState({selected});
  }

  render() {
    return (
    <div className='sort-review'>
      <span id='help' className='page-sort' onClick={this.clickHandler}>Most helpful</span>
      <span id='pos' className='page-sort' onClick={this.clickHandler}>Most positive</span>
      <span id='neg' className='page-sort' onClick={this.clickHandler}>Least positive</span>
      <span id='new' className='page-sort' onClick={this.clickHandler}>Newest</span>
    </div>
    );
  }
}

export default PageReviewSort;