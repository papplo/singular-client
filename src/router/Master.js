import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Category from '../containers/category/Category';
import DiscoverCategories from '../containers/discoverCategories/DiscoverCategories';
import DiscoverSkills from '../containers/discoverSkills/DiscoverSkills';
import Header from '../containers/header/Header';
import Home from '../containers/home/Home';
import Inbox from '../containers/inbox/Inbox';
import Me from '../containers/me/Me';
import Profile from '../containers/profile/Profile';
import SkillProfile from '../containers/skillProfile/SkillProfile';

//TODO: Create signin/signup with redirect to previous page
//Include? : <Route path="/edit-profile" component={EditProfile} />
//          <Route path="/edit-skills" component={EditSkills} />

class Master extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/discover-categories" component={DiscoverCategories} />
          <Route path="/discover-skills" component={DiscoverSkills} />
          <Route path="/category" component={Category} />
          <Route path="/skill-profile" component={SkillProfile} />
          <Route path="/profile" component={Profile} />
          <Route path="/me" component={Me} />
          <Route path="/inbox" component={Inbox} />
        </Router>
      </React.Fragment>
    );
  }
}

export default Router;
