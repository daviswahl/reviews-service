import React from 'react';

var Header = (props) => (
  <div>
    <h2 className='main-header'>Reviews</h2>
    <span className='num-reviews'>{props.numReviews}</span>
    <a className='read-all'>
      <span>Read all reviews</span>
      <span className='read-all-icon'></span>
    </a>
  </div>
);

export default Header;