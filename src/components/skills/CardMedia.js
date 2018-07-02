import React from 'react';

export default (props) => {

  const bgImage = {
    backgroundImage: 'url('+props.skill.body.img_url+')',
    backgroundSize: 'cover',
    Transition: 'all',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

  const bgFade = {
      backgroundImage: 'linear-gradient(to bottom right,rgba(0,0,0,0),rgba(0,0,0,.9))',
  }


  return (
    <div className="card skill is-round is-clipped	" style={bgImage}>
      <div className="card-content" style={bgFade} >
        <div className="media">
          <div className="media-content">
            <p className="title is-3 has-text-white">
              {props.skill.status === 200 && props.skill.body.title}</p>
            <p className="subtitle is-6 has-text-grey-light is-serif">{props.user.status === 200 && 'by ' + props.user.body.name +' '+ props.user.body.surname}</p>
          </div>
        </div>

        <div className="content is-hidden-mobile has-text-grey-lighter is-serif">
          {props.skill.status === 200 && props.skill.body.description}
          <br />
          <time dateTime="2016-1-1">{props.skill.status === 200 && props.skill.body.created_at.slice(0, 10)}</time>
        </div>
      </div>
    </div>
  );
}
