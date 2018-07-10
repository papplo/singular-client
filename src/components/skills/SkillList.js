import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SkillList extends Component {

  renderSkills () {
    const result =
      this.props.skills.map((elem) => {

        // render list as cards when passing cards="true"
      if (this.props.cards === true) {
        const bgImage = {
          backgroundImage: 'url('+elem.img_url+')',
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
                  <Link className="custom"
                    key={elem.pk_skill_id}
                    to={'/skill-profile/' + elem.pk_skill_id}>
                    <p className="title is-3 has-text-white">
                      {elem.title}</p>
                    <p className="subtitle is-6 has-text-grey-light is-serif">
                      <time dateTime="2016-1-1">{elem.created_at.slice(0, 10)}</time>
                    </p>
                  </Link>
                </div>
              </div>

              <div className="content is-hidden-mobile has-text-grey-lighter is-serif">
                {elem.description}
                <br />
                <time dateTime="2016-1-1">{elem.created_at.slice(0, 10)}</time>
              </div>
            </div>
          </div>
          )
      }
      // render list as list
      else {
        return (
          <div className="container">
            <article className="media skills-list"
              key={elem.pk_skill_id}>
              <figure className="media-left">
                <p className="image is-64x64 ">
                  <img className="is-circular"
                    src={elem.img_url || 'https://bulma.io/images/placeholders/64x64.png'} alt={elem.title} />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p className="title is-5 has-text-weight-normal">
                    <Link className="custom"
                      key={elem.pk_skill_id}
                      to={'/skill-profile/' + elem.pk_skill_id}>
                    <span className="is-sans has-text-grey">{elem.title}</span><br />
                  </Link>
                  </p>

                </div>
              </div>
            </article>
          </div>
        )
      };
    });
  }


  render() {
    if (!this.props.skills) return null;

    return (
      <div>
        {this.renderSkills()}
      </div>

    );

    }
}
