import React from 'react';

export default (props) => {
  return (
    <section className={"hero is-medium is-" + props.color + " is-bold"}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered is-size-2 is-serif has-text-weight-light	"> 
          {props.userLocation.status === 200 && props.title + props.userLocation.body.city}
          </h1>
        </div>
        <div className="container" style={{paddingTop: 2 + 'em'}}>
          {props.children}
        </div>
      </div>
    </section>
  );
}
