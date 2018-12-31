import React from 'react';
import FullReview from './FullReview.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    /*
      I'm fairly certain it's bad to reach out of your container and grab references to dom elements
      in this way. It breaks encapsulation and the react component lifecycle.

      The best fix is usually to restructure your components so that the flow works as intended, but you can also 
      use the Ref escape hatch. 

      See more here:
      https://reactjs.org/docs/refs-and-the-dom.html
    */
    var modal = document.getElementsByClassName('modal-review')[0];
    var btn = document.getElementsByClassName('read-all')[0];
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.animate([{transform: 'translateY(0px)', opacity: 1}, {transform: 'translateY(40px)',opacity: 0}], {duration: 500});
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    } 

    /*
    This strikes me as a very jQuery-esque way of dealing with modals, and it seems really hackey in React. Take a look at using
    portals instead: https://reactjs.org/docs/portals.html
    */
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.animate([{transform: 'translateY(0px)', opacity: 1}, {transform: 'translateY(40px)',opacity: 0}], {duration: 500});
        setTimeout(() => {
          modal.style.display = "none";
        }, 500);
      }
    }
  }

  render() {
    return (
      <div>
        <div className='modal-review'><FullReview /></div>
        <h2 className='main-header'>Reviews</h2>
        <span className='num-reviews'>{this.props.numReviews}</span>
        <a className='read-all'>
          <span>Read all reviews</span>
          <span className='read-all-icon'></span>
        </a>
      </div>
    );
  }
} 

export default Header;