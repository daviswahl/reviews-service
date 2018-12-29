import React from 'react';
import ReactDom from 'react-dom';
import _ from 'underscore';
import $ from 'jquery';
import Header from './Components/Header.jsx';
import RateAndReview from './Components/RateAndReview.jsx';
import ShortReview from './Components/ShortReview.jsx';
import RatingBreakdown from './Components/RatingBreakdown.jsx';
import PageReviewSort from './Components/PageReviewSort.jsx';
import ReviewGrid from './Components/ReviewGrid.jsx';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [{user_name:'John Doe', image_url:'https://vignette.wikia.nocookie.net/bojackhorseman/images/d/d2/BoJack_Horsemann.png/revision/latest?cb=20170924222700',
      is_allstar:false, followers: 0, favorites: 0, made:0}],
      Reviews: [{user_name:'John Doe', recipe_name:'Mac & Cheese',review_text: 'loading',submit_date: 'loading',rating:5,likes:0}],
      currentUser: {user_name:'John Doe', image_url:'https://vignette.wikia.nocookie.net/bojackhorseman/images/d/d2/BoJack_Horsemann.png/revision/latest?cb=20170924222700',
                    is_allstar:false, followers: 0, favorites: 0, made:0},
      numReviews: '0',
      mostHelpfulPositiveReview: {user_name:'John Doe', recipe_name:'Mac & Cheese',review_text: 'loading',submit_date: 'loading',rating:0,likes:0},
      mostHelpfulNegativeReview: {user_name:'John Doe', recipe_name:'Mac & Cheese',review_text: 'loading',submit_date: 'loading',rating:0,likes:0},
      hidden: true
    }
    this.sortReviews = this.sortReviews.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
  }

  componentDidMount() {
    ([
      'Users','Reviews'
    ]).forEach(query => {
      this.getData(query);
    })
  } 

  updateState(newState) {
    this.setState(newState);
  }

  getData(queryString) {
    let update = (data) => {
      let state = {};
      state[queryString] = data;
      if (queryString === 'Users') {
        state.currentUser = data[0];
      } else if (queryString === 'Reviews') {
        state.mostHelpfulPositiveReview = state.mostHelpfulNegativeReview = data[0];
        data.forEach(review => {
          if (review.rating > state.mostHelpfulPositiveReview.rating) {
            state.mostHelpfulPositiveReview = review;
          } else if (review.rating < state.mostHelpfulNegativeReview.rating){
            state.mostHelpfulNegativeReview = review;
          }
        });
        state.numReviews = state.Reviews.length.toString();
      }
      this.updateState(state);
    }
    update = update.bind(this);
    $.get('/Data/' + queryString, update)
  }

  sortReviews(key) {
    let Reviews = this.state.Reviews;
    let sortMethod = (a,b) => {
      if (key === 'help') {
        return b.likes - a.likes;
      } else if (key === 'pos') {
        return b.rating - a. rating;
      } else if (key === 'neg') {
        return a.rating - b.rating;
      } else if (key === 'new') {
        return moment(a.short_submit_date).isBefore(b.short_submit_date) ? 1 : -1;
      }
    }
    Reviews.sort(sortMethod);
    this.setState({Reviews});
  }

  showMoreReviews(e) {
    e.target.style.display = 'none';
    this.setState({hidden:false});
  }

  render() {
    return (
      <div className='review-page'>
        <Header numReviews={this.state.numReviews} />
        <RateAndReview image_url={this.state.currentUser.image_url} />
        <div className='review-preview'>
          <div className='highlighted-reviews'>
            <div className='short-review-container'>
              <span className='highlight-header'>Most helpful positive review</span>
              <ShortReview user={this.state.Users[0]} review={this.state.mostHelpfulPositiveReview} />
            </div>
            <div className='short-review-container'>
              <span className='highlight-header'>Most helpful critical review</span>
              <ShortReview user={this.state.Users[this.state.Users.length - 1]} review={this.state.mostHelpfulNegativeReview} />
            </div>
          </div>
          <div className='rating-breakdown'>
            <RatingBreakdown reviews={this.state.Reviews} />
          </div>
        </div>
        <div className='page-sort-container'>
          <PageReviewSort sortReviews={this.sortReviews} />
        </div>
        <div className='reviews-container'>
          <ReviewGrid users={this.state.Users} chunkedReviews={_.chunk(this.state.hidden ? this.state.Reviews.slice(0,3) : this.state.Reviews,3)}/>
        </div>
        <div className='show-more-reviews'>
          <div onClick={this.showMoreReviews} className='show-button'>
            More Reviews
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));