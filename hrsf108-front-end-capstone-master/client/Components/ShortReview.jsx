import React from 'react';
import ShortUser from './ShortUser.jsx';
import Rating from './Rating.jsx';
import FullReview from './FullReview.jsx';

class ShortReview extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var modal = document.getElementsByClassName('modal-review')[0];
    var btn = document.getElementsByClassName('read-more')[0];
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  
  render() {
    return (
    <div className='short-review'>
    <div className='modal-review' animation='modal'><FullReview /></div>
      <ShortUser user={this.props.user} />
      <div className='rating-and-date'>
        <Rating rating={this.props.review.rating}/>
        <div className='submit-date'>{this.props.review.short_submit_date}</div>
      </div>
      <div className='review-text'>{this.props.review.review_text}</div>
      <span className='read-more'></span> <span className='read-more-text'>Read more</span>
    </div>
    );
  }
}


export default ShortReview;