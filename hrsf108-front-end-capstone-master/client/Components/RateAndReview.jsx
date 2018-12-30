import React from 'react';
import AddReview from './AddReview.jsx';

class RateAndReview extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var modal = document.getElementsByClassName('modal-add')[0];
    var btn = document.getElementsByClassName('rate')[0];
    var span1 = document.getElementsByClassName("close-add-review")[0];
    var span2 = document.getElementsByClassName("cancel")[0];
    var span3 = document.getElementsByClassName("submit")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span1.onclick = function() {
      modal.animate([{transform: 'translateY(0px)', opacity: 1}, {transform: 'translateY(40px)',opacity: 0}], {duration: 500});
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    } 
    span2.onclick = function() {
      modal.animate([{transform: 'translateY(0px)', opacity: 1}, {transform: 'translateY(40px)',opacity: 0}], {duration: 500});
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    } 
    span3.onclick = function() {
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
      <div className='rate-section'>
        <div className='modal-add'><AddReview /></div>
        <div className='rate-content'>
          <img className='user-icon' src={this.props.image_url}/>
          <a className='rate'>
            <div className='review-bubble'>Rate and review</div>
          </a>
        </div>
      </div>
    );
  }
}
export default RateAndReview;