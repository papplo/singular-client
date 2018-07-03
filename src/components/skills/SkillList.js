import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SkillList extends Component {
  render() {
    const mapResult = this.props.skills.map((elem) => elem.title);
    console.log('mapResult',mapResult);

    return (
      <section className="section has-half-padding-top">
      <div className="container">
        {this.props.skills.map((elem) => elem.title)}
        {this.props.skills.map((elem) => {
          <article className="media skills-list" key={elem.pk_skill_id}>
            <figure className="media-left">
              <p className="image is-64x64 ">
                <img className="is-circular" src={elem.img_url || 'https://bulma.io/images/placeholders/64x64.png'} alt={elem.title} />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p className="title is-5 has-text-weight-normal">
                  <Link className="custom" key={elem.pk_skill_id} to={'/skill-profile/' + elem.pk_skill_id}>
                  <span className="is-sans has-text-grey">{elem.title}</span><br />
                  <span className="subtitle is-6 is-serif has-text-grey">By {elem.creator_name}</span>
                </Link>
                </p>

              </div>
            </div>

          </article>
        })
        }
      </div>
    </section>
    );




    }
}
