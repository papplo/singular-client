import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import '../style/theme.css';

import Category from '../containers/category/Category';
import DiscoverCategories from '../containers/discoverCategories/DiscoverCategories';
import DiscoverSkills from '../containers/discoverSkills/DiscoverSkills';
import Header from '../containers/header/Header';
import Home from '../containers/home/Home';
import Inbox from '../containers/inbox/Inbox';
import Me from '../containers/me/Me';
import Profile from '../containers/profile/Profile';
import SkillProfile from '../containers/skillProfile/SkillProfile';
import Login from '../containers/login/Login';

class Master extends Component {
  render() {
    return (
      <div className='MasterContainer'>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/discover-categories" component={DiscoverCategories} />
            <Route path="/discover-skills" component={DiscoverSkills} />
            <Route path="/category" component={Category} />
            <Route path="/skill-profile" component={SkillProfile} />
            <Route path="/profile" component={Profile} />
            <Route path="/me" component={Me} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default Master;
