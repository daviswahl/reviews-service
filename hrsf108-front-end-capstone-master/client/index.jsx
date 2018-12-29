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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      Reviews: [{user_name:'John Doe', recipe_name:'Mac & Cheese', recipe_id: 1,review_text: 'loading',submit_date: 'loading',rating:5,likes:1}],
      currentUser: {user_name:'John Doe', image_url:'https://vignette.wikia.nocookie.net/bojackhorseman/images/d/d2/BoJack_Horsemann.png/revision/latest?cb=20170924222700',
                    is_allstar:false, followers: 10, favorites: 10, made:10},
      numReviews: '0',
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
        return b.long_submit_date > a.Long_submit_date ? 1 : -1;
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
              <ShortReview user={this.state.currentUser} review={this.state.Reviews[0]} />
            </div>
            <div className='short-review-container'>
              <span className='highlight-header'>Most helpful critical review</span>
              <ShortReview user={this.state.currentUser} review={this.state.Reviews[0]} />
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
          <ReviewGrid user={this.state.currentUser} chunkedReviews={_.chunk(this.state.hidden ? this.state.Reviews.slice(0,3) : this.state.Reviews,3)}/>
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