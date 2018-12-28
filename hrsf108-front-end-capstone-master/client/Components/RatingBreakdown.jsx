import React from 'react';
import Rating from './Rating.jsx';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getPercentages();
  }

  componentDidUpdate() {
    this.getPercentages();
  }

  getPercentages() {
    let reviews = this.props.reviews;
    let percentages = {oneStar:0,twoStars:0,threeStars:0,fourStars:0,fiveStars:0};
    reviews.forEach(review => {
      let rating;
      if (review.rating === 1) rating = 'oneStar';
      else if (review.rating === 2) rating ='twoStars';
      else if (review.rating === 3) rating ='threeStars';
      else if (review.rating === 4) rating ='fourStars';
      else if (review.rating === 5) rating ='fiveStars';
      percentages[rating] += 100 / (reviews.length);
    });
    for (var percent in percentages) {
      document.getElementById(percent).style.width = `${percentages[percent]}%`;
    }
  }

  render() {
    return (

      <div className='rating-breakdown'>
      <ol>
        <li id='rating-header'>{this.props.reviews.length} Ratings</li>
        <li>
          <div>
            <div className='full-bar'>
              <div className='filled-bar' id='fiveStars'></div>
            </div>
            <div className='breakdown-rating'><Rating rating={5}/></div>
          </div>
        </li>
        <li>
          <div>
            <div className='full-bar'>
              <div className='filled-bar' id='fourStars'></div>
            </div>
            <div className='breakdown-rating'><Rating rating={4}/></div>
          </div>
        </li>
        <li>
          <div>
            <div className='full-bar'>
              <div className='filled-bar' id='threeStars'></div>
            </div>
            <div className='breakdown-rating'><Rating rating={3}/></div>
          </div>
        </li>
        <li>
          <div>
            <div className='full-bar'>
              <div className='filled-bar' id='twoStars'></div>
            </div>
            <div className='breakdown-rating'><Rating rating={2}/></div>
          </div>
        </li>
        <li>
          <div>
            <div className='full-bar'>
              <div className='filled-bar' id='oneStar'></div>
            </div>
            <div className='breakdown-rating'><Rating rating={1}/></div>
          </div>
        </li>
      </ol>
    </div>
      );
  }
  
}


export default RatingBreakdown;