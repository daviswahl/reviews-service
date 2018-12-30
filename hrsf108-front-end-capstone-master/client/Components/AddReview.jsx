import React from 'react';
import Rating from './Rating.jsx';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className='add-review'>
        <div className='add-header'>
          <h2 className='add-header-text'>Rate, Review &amp; Add Photo</h2>
        </div>
        <div className='add-rating-text'>
          <span className='your-rating-header'>Your rating</span>
          <span className='your-rating-text'>Love it!</span>
          <div className='your-rating-stars'><Rating rating={5} /></div>
        </div>
        <label className='user-review-label' for='user-review'>Your review(optional)</label>
        <textarea id='user-review' placeholder='Did you make any changes, and will you make it again?'></textarea>
        <div className='add-photo'>
          <span class='picture-icon'></span>
          <span class='add-picture-text'>Add Photo</span>
        </div>
        <div className='cancel-or-submit'>
          <a className='cancel'>Cancel</a>
          <a className='submit'>Submit</a>
        </div>
        <div className='close-add-review'></div>
      </div>
    );
  }
}

export default AddReview;