import React from 'react';
import ShortReview from './ShortReview.jsx';

var ReviewGrid = (props) => (
  <table className='reviews-table'>
    <tbody>
      {props.chunkedReviews.map(reviews => 
        <tr className='reviews-row'>{reviews.map(review => 
          <td className='reviews-data'>
              <ShortReview user={props.users[Math.floor(Math.random()*props.users.length)]} review={review} />
          </td>)}
        </tr>)}
    </tbody>
  </table>
);

export default ReviewGrid;