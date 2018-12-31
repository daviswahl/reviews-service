import React from 'react';
/*
  See this warning: https://fb.me/react-warning-keys

  React requires that we provide a unique key for each element in an array of React components. So, we pass the index
  to the component constructor so that it can add a unique key. Note that we must prefix our keys with `filled-i` and `empty-i`,
  or else we'd end up with identical indexes when contenating our stars array.

  Also I removed the for loop in favor of mapping over an array. In languages that allow it, you should always favor iterators
  with higher-order functions over for-loops, unless you need to optimize for speed (you usually don't).

  Finally, you should download the source images from allrecipes and compile them into your project as assets.
  I can't remember how this works exactly but it's not hard.
*/ 
const filledStar = i => <img className='star' key={`filled-${i}`} src='https://images.media-allrecipes.com/ar-images/icons/rating-stars/full-star-2015.svg'/>;
const emptyStar = i => <img className='star' key={`empty-${i}`} src='https://images.media-allrecipes.com/ar-images/icons/rating-stars/empty-star.svg'/>;

var Rating = props => {
  let filled = new Array(props.rating).fill(0).map((_,i) => filledStar(i));
  let empty = new Array(5 - props.rating).fill(0).map((_,i) => emptyStar(i))

  let stars = filled.concat(empty);
  return (
    <div className='rating' >
      {stars}
    </div>
  );
}

export default Rating;