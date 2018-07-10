import React from 'react';
import BgImage from '../../assets/singular-bg.png';
export default (props) => {

  const bgImage = {
    backgroundImage: 'url('+BgImage+')',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    Transition: 'all',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };


  return (
    <section className={"hero is-medium is-" + props.color + " is-bold"} >
      <div className="hero-body" style={bgImage}>
        <div className="container">
          <h1 className="title has-text-centered is-size-2 is-serif has-text-weight-light	">
          {props.title} {props.userLocation.status === 200 && props.userLocation.body.city}
          </h1>
        </div>
        <div className="container" style={{paddingTop: 2 + 'em'}}>
          {props.children}
        </div>
      </div>
    </section>
  );
}
