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
    let percentages = {
      oneStar:{rating:0, text:'cooks couldn\'t eat it'},
      twoStars:{rating:0, text:'cooks didn\'t like it'},
      threeStars:{rating:0, text:'cooks thought it was OKAY'},
      fourStars:{rating:0, text:'cooks liked it!'},
      fiveStars:{rating:0, text:'cooks loved it!'}
    };
    reviews.forEach(review => {
      let rating;
      if (review.rating === 1) rating = 'oneStar';
      else if (review.rating === 2) rating ='twoStars';
      else if (review.rating === 3) rating ='threeStars';
      else if (review.rating === 4) rating ='fourStars';
      else if (review.rating === 5) rating ='fiveStars';
      percentages[rating].rating += 100 / (reviews.length);
    });
    for (var percent in percentages) {
      let obj = percentages[percent];
      document.getElementById(percent).style.width = `${obj.rating}%`;
      document.getElementById(percent+'-row').title = `${obj.rating * reviews.length/100} ${obj.text}`;
    }
  }

  render() {
    return (

      <div>
      <ol>
        <li id='rating-header'>{this.props.reviews.length} Ratings</li>
        <li>
          <div className='rating-breakdown-row' id='fiveStars-row'>
            <div className='full-bar'>
              <div className='filled-bar' id='fiveStars'></div>
            </div>
            <div className='breakdown-rating'><Rating rating={5}/></div>
          </div>
        </li>
        <li>
          <div className='rating-breakdown-row' id='fourStars-row'>
            <div className='full-bar'>
              <div className='filled-bar' id='fourStars'></div>
            </div>
            <div className='breakdown-rating'><Rating rating={4}/></div>
          </div>
        </li>
        <li>
          <div className='rating-breakdown-row' id='threeStars-row'>
            <div className='full-bar'>
              <div className='filled-bar' id='threeStars'></div>
            </div>
            <div className='breakdown-rating'><Rating rating={3}/></div>
          </div>
        </li>
        <li>
          <div className='rating-breakdown-row' id='twoStars-row'>
            <div className='full-bar'>
              <div className='filled-bar' id='twoStars'></div>
            </div>
            <div className='breakdown-rating'><Rating rating={2}/></div>
          </div>
        </li>
        <li>
          <div className='rating-breakdown-row' id='oneStar-row'>
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