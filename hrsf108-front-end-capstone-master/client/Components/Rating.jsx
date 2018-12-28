import React from 'react';

var Rating = props => {
  let filled = props.rating;
  let empty = 5 - props.rating;
  let stars = [];

  for (let i = 0; i < filled; i++) {
    stars.push(<img className='star' src='https://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg'/>);
  }
  for (let i = 0; i < empty; i++) {
    stars.push(<img className='star' src='https://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg'/>);
  }

  return (
    <div className='rating' >
      {stars}
    </div>
  );
}

export default Rating;