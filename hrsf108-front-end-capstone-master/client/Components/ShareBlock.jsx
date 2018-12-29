import React from 'react';

var ShareBlock = (props) => (
  <div className='share-block-inner'>
    <div className='share-links'>
      <div className='pinterest-container'>
        <span className='pinterest'></span>
      </div>
      <div className='facebook-container'>
        <span className='facebook'></span>
      </div>
      <div className='twitter-container'>
        <span className='twitter'></span>
      </div>
      <div className='google-container'>
        <span className='google'></span>
      </div>
    </div>
    <div className='review-link-container'>
      <a className='review-link'>https://allrecipes.com</a>
    </div>
  </div>
);

export default ShareBlock;