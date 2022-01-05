import React from 'react';

function Button(props) {
  return (
    <a onClick={props.clickAction} className={props.class ? ('main-btn ' + props.class) : 'main-btn' }  href={props.href} data-aos="fade-up" data-aos-duration={props.duration ? (props.duration) : 400 } data-aos-delay={props.delay ? (props.delay) : 100 }>{props.title}</a>
 );
}

export default Button;