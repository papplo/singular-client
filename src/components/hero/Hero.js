import React from 'react';

export default (props) => {
  console.log('hero props', props);
  return (
    <section className="hero is-medium is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered is-size-2">
            Discover Skills shared by Peers in {props.userLocation.status === 200 && props.userLocation.body.city}
          </h1>
          <h2 className="subtitle has-text-centered is-size-6 has-text-grey">
            Not in {props.userLocation.status === 200 && props.userLocation.body.city}? <strong>Change your location</strong>!
          </h2>
        </div>
        <div className="container" style={{paddingTop: 2 + 'em'}}>
          {props.children}
        </div>
      </div>
    </section>
  );
}
