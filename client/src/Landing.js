import React from 'react';
import Button from './Button';
import $ from 'jquery';

function Landing(props) {
  function handleClick(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: $(".work").offset().top }, 1000);
  }

  return (
    <div className="landing">
      <div className="inner">
        {props.landingItems[0].fields.headline ? <h1 id="title">{props.landingItems[0].fields.headline}</h1> : <></> }
        {props.landingItems[0].fields.description ? <p>{props.landingItems[0].fields.description}</p> : <></>}
        <Button clickAction={handleClick} href="#" title="View Work" class="view-work-btn" duration="0" delay="0" />
      </div>
    </div>
  );
}

export default Landing;