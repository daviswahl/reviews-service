import React from 'react';

var RateAndReview = (props) => (
  <div className='rate-section'>
  <div className='rate-content'>
    <img className='user-icon' src={props.image_url}/>
    <a className='rate'>
      <div className='review-bubble'>Rate and review</div>
    </a>
  </div>
</div>
);

export default RateAndReview;