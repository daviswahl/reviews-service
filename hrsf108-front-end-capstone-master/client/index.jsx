import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import User from './Components/User.jsx';
import ReviewSort from './Components/ReviewSort.jsx';
import Rating from './Components/Rating.jsx';
import Share from './Components/Share.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      Users: [],
      Reviews: [],
      user_liked_review: false,
      currentReview: {user_name:'John Doe', recipe_name:'Mac & Cheese', recipe_id: 1,review_text: 'loading',submit_date: 'loading',rating:5,likes:1},
      currentRecipe: 1,
      currentUser: {user_name:'John Doe', image_url:'https://vignette.wikia.nocookie.net/bojackhorseman/images/d/d2/BoJack_Horsemann.png/revision/latest?cb=20170924222700',
                    is_allstar:false, followers: 10, favorites: 10, made:10}
    }
    this.updateState = this.updateState.bind(this);
    this.getData = this.getData.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.nextReview = this.nextReview.bind(this);
    this.prevousReview = this.prevousReview.bind(this);
  }
  
  componentDidMount() {
    ([
      'Users','Reviews',
      'user_liked_review'
    ]).forEach(query => {
      this.getData(query);
    })
  }
  
  updateState(newState) {
    this.setState(newState);
  }

  clickLike(){
    let user_liked_review = true;
    let currentReview = this.state.currentReview;
    currentReview.likes++;
    this.updateState(user_liked_review,currentReview);
  }

  prevousReview() {
    let index = this.state.Reviews.indexOf(this.state.currentReview) - 1;
    index = index === -1 ? this.state.Reviews.length - 1 : index;
    let currentReview = this.state.Reviews[index];
    let currentUser = this.state.Users.filter(user => user.user_name === currentReview.user_name)[0] || currentUser;
    this.updateState({currentReview, currentUser});
  }

  nextReview() {
    let index = this.state.Reviews.indexOf(this.state.currentReview) + 1;
    index = index === this.state.Reviews.length ? 0 : index;
    let currentReview = this.state.Reviews[index];
    let currentUser = this.state.Users.filter(user => user.user_name === currentReview.user_name)[0] || this.state.currentUser;
    console.log(currentUser);
    this.updateState({currentReview, currentUser});
  }

  getData(queryString) {
    let update = (data) => {
      let state = {};
      if(queryString === 'Users') {
        state[queryString] = data;
        state.currentUser = data[0];
      } else if (queryString === 'Reviews') {
        state.Reviews = data.filter(review => review.recipe_id === this.state.currentRecipe);
        state.currentReview = data[0];
      } else if (queryString === 'user_liked_review') {
        data = data.reduce((isLiked,like) => {
          if (like.user_id === this.state.currentUser && like.review_id === this.state.currentReview.id) {
            isLiked = true;
          }
          return isLiked;
        },false);
        state[queryString] = data;
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
        return b.submit_date > a.submit_date ? 1 : -1;
      }
    }
    Reviews.sort(sortMethod);
    this.setState({Reviews});
  }

  render() {
    return (
      <div id='review-display'>
        <div id='review-header'>
          <div id='header'>Reviews for: {this.state.currentReview.recipe_name}</div>
          <ReviewSort sortReviews={this.sortReviews}/>
        </div>
        <div className='travel'>
          <span className='prev' onClick={this.prevousReview}>Previous</span><span className='next' onClick={this.nextReview}>Next</span>
        </div>
        
        <User review={this.state.currentReview} user={this.state.currentUser}/>
        <div className='user-interact'>  
          <div className='likes'>
            <span className='likes-icon'></span>
            <span className='number-likes'>{this.state.currentReview.likes}</span>
          </div>
          <Share />
        </div>
        <hr className='line'/>
        <Rating rating={this.state.currentReview.rating}/>
        <span className='submit-date'>{this.state.currentReview.submit_date}</span>
        <div className='review-text'>{this.state.currentReview.review_text}</div>
        <div className='travel'>
          <span className='prev' onClick={this.prevousReview}>Previous</span><span className='next' onClick={this.nextReview}>Next</span>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));