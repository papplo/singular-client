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
      backgroundImage: 'linear-gradient(to bottom right,rgba(0,0,0,0),rgba(0,0,0,.7))',
  }


  return (
    <div className="card" style={bgImage}>
      <div className="card-image">

      </div>
      <div className="card-content" style={bgFade} >
        <div className="media">
          <div className="media-content">
            <p className="title is-2 has-text-white">
              {props.skill.status === 200 && props.skill.body.title}</p>
            <p className="subtitle is-6 has-text-white">{props.user.status === 200 && 'by ' + props.user.body.name +' '+ props.user.body.surname}</p>
          </div>
        </div>

        <div className="content is-hidden-touch" >
          {props.skill.status === 200 && props.skill.body.description}
          <br />
          <time dateTime="2016-1-1">{props.skill.status === 200 && props.skill.body.created_at}</time>
        </div>
      </div>
    </div>
  );
}
