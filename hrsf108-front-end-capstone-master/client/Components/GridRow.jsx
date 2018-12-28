import React from 'react';
import GridLocation from './GridLocation.jsx';

var GridRow = (props) => (
  <tr>{props.reviews.map(review => <td><ShortReview user={props.user} review={review} /></td>)}</tr>
);

export default GridRow;