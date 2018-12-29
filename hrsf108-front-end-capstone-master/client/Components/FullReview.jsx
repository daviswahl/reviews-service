import React from 'react';
import $ from 'jquery';
import User from './User.jsx';
import FullReviewSort from './ReviewSort.jsx';
import Rating from './Rating.jsx';
import Share from './Share.jsx';
import ShareBlock from './ShareBlock.jsx';

class FullReview extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      Users: [],
      Reviews: [],
      like: false,
      shareBlock: false,
      likeStyle: {},
      likeIcon: {},
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
    this.likeReview = this.likeReview.bind(this);
    this.showShareBlock = this.showShareBlock.bind(this);
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
    let currentUser = this.state.Users[index]
    this.updateState({currentReview, currentUser});
    this.resetLike();
  }

  nextReview() {
    let index = this.state.Reviews.indexOf(this.state.currentReview) + 1;
    index = index === this.state.Reviews.length ? 0 : index;
    let currentReview = this.state.Reviews[index];
    let currentUser = this.state.Users[index]
    this.updateState({currentReview, currentUser});
    this.resetLike();
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
        return b.long_submit_date > a.Long_submit_date ? 1 : -1;
      }
    }
    Reviews.sort(sortMethod);
    let currentReview = Reviews[0];
    let currentUser = this.state.Users.sort((a,b) => (2*Math.random() - 1))[0]
    this.setState({Reviews, currentReview, currentUser});
    this.resetLike();
  }

  resetLike() {
    this.setState({
      like:false,
      likeStyle:{backgroundColor:'#fff'},
      likeIcon:{backgroundPosition: '98.66375121477162% 14.193194291986828%'}
    });
  }

  likeReview() {
    if(!this.state.like) {
      let currentReview = this.state.currentReview;
      currentReview.likes++;
      this.setState({currentReview,
                      like:true,
                      likeStyle:{backgroundColor:'#ff7e1a'},
                      likeIcon:{backgroundPosition: '98.66375121477162% 21.218441273326015%'}
                    });
    } else {
      let currentReview = this.state.currentReview;
      currentReview.likes--;
      this.setState({currentReview,
                      like:false,
                      likeStyle:{backgroundColor:'#fff'},
                      likeIcon:{backgroundPosition: '98.66375121477162% 14.193194291986828%'}
                    });
    } 
  }

  showShareBlock() {
    console.log('SHOW SHARE BLOCK CALLED');
    var shareBlock = this.state.shareBlock ? false : true;
    this.setState({shareBlock});
  }

  render() {
    return (
      <div id='review-display'>
        <div id='review-header'>
          <div id='header'>Reviews for: {this.state.currentReview.recipe_name}</div>
          <FullReviewSort sortReviews={this.sortReviews}/>
          <span className='close'>X</span>
        </div>
        <div className='user-info'>
          <User review={this.state.currentReview} user={this.state.currentUser}/>
          <div className='user-interact'>  
            <div onClick={this.likeReview} style={this.state.likeStyle} className='likes'>
              <span style={this.state.likeIcon} className='likes-icon'></span>
              <span className='number-likes'>{this.state.currentReview.likes}</span>
            </div>
            <Share showShareBlock={this.showShareBlock}/>
          </div>
        </div>
        {this.state.shareBlock ? <div className='share-block'> <ShareBlock /> </div>: null}
        <hr className='line'/>
        <div className='full-rating-submit'>
          <div className='full-rating'>
            <Rating rating={this.state.currentReview.rating}/>
          </div>
          <span className='full-submit-date'>{this.state.currentReview.long_submit_date}</span>
        </div>
        <div className='review-text-container'>
          <div className='review-text'>{this.state.currentReview.review_text}</div>
        </div>
        <div className='travel'>
          <span className='prev' onClick={this.prevousReview}>Previous</span><span className='next' onClick={this.nextReview}>Next</span>
        </div>
        <div onClick={this.previousReview} className='left-paddle'>
          <span className='left-arrow'></span>
        </div>
        <div onClick={this.nextReview} className='right-paddle'>
          <span className='right-arrow'></span>
        </div>
      </div>
    );
  }
}

export default FullReview;