import React from 'react';

var ShareBlock = (props) => (
  <div className='share-block-inner'>
    <div className='share-links'>
      <div className='pinterest-container'>
        <span onClick={()=> window.open('https://pinterest.com', '_blank')} className='pinterest'></span>
      </div>
      <div className='facebook-container'>
        <span onClick={()=> window.open('http://facebook.com', '_blank')} className='facebook'></span>
      </div>
      <div className='twitter-container'>
        <span onClick={()=> window.open('http://twitter.com', '_blank')} className='twitter'></span>
      </div>
      <div className='google-container'>
        <span onClick={()=> window.open('http://google.com', '_blank')} className='google'></span>
      </div>
    </div>
    <div className='review-link-container'>
      <a className='review-link'>https://allrecipes.com</a>
    </div>
  </div>
);

export default ShareBlock;