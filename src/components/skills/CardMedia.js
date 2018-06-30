import React from 'react';

export default (props) => {

  const divStyle = {
  color: 'white',
  backgroundColor: '#ccc',
  backgroundImage: 'url('+props.skill.body.img_url+')',
  backgroundSize: 'cover',
  Transition: 'all',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  return (
    <div className="card">
      <div className="card-image">

      </div>
      <div className="card-content" style={divStyle}>
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              {props.skill.status === 200 && props.skill.body.title}</p>
            <p className="subtitle is-6">{props.user.status === 200 && 'by ' + props.user.body.name +' '+ props.user.body.surname}</p>
          </div>
        </div>

        <div className="content">
          {props.skill.status === 200 && props.skill.body.description}
          <br />
          <time dateTime="2016-1-1">{props.skill.status === 200 && props.skill.body.created_at}</time>
        </div>
      </div>
    </div>
  );
}
