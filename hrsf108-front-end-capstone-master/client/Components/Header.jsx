import React from 'react';
import FullReview from './FullReview.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
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