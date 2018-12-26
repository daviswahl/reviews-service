import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import RecipeSort from './Components/RecipeSort.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      Users: [],
      Reviews: [],
      user_favorited_recipe: [],
      user_made_recipe: [],
      currentReview: {recipe_id: 'loading',review_text: 'loading',submit_date: 'loading'},
      currentUser: null
    }
    this.updateState = this.updateState.bind(this);
    this.getData = this.getData.bind(this);
    this.sortRecipes = this.sortRecipes.bind(this);
    this.nextReview = this.nextReview.bind(this);
    this.prevousReview = this.prevousReview.bind(this);
  }
  
  componentDidMount() {
    ([
      'Users','Reviews',
      'user_made_recipe','user_favorited_recipe'
    ]).forEach(query => {
      this.getData(query);
    })
  }
  
  updateState(newState) {
    this.setState(newState);
  }

  prevousReview() {
    let index = this.state.Reviews.indexOf(this.state.currentReview) - 1;
    index = index === -1 ? this.state.Reviews.length - 1 : index;
    let currentReview = this.state.Reviews[index];
    this.updateState({currentReview});
  }

  nextReview() {
    let index = this.state.Reviews.indexOf(this.state.currentReview) + 1;
    index = index === this.state.Reviews.length ? 0 : index;
    let currentReview = this.state.Reviews[index];
    this.updateState({currentReview});
  }

  getData(queryString) {
    let update = (data) => {
      let state = {};
      state[queryString] = data;
      if(queryString === 'Users') {
        state.currentUser = data[0];
      } else if (queryString === 'Reviews') {
        state.currentReview = data[0];
      }
      this.updateState(state);
    }
    update = update.bind(this);
    $.get('/Data/' + queryString, update)
  }

  sortRecipes(key) {
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
      <div>
        <div id='header'>Reviews for {this.state.currentReview.recipe_id}</div>
        <RecipeSort sortRecipes={this.sortRecipes}/>
        {/* <User /> <Like /> <Share /> <Rating />*/}
        <div>{this.state.currentReview.submit_date}</div>
        <div>{this.state.currentReview.review_text}</div>
        <span onClick={this.prevousReview}>Previous</span><span onClick={this.nextReview}>Next</span>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));