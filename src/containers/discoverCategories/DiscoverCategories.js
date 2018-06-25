import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DiscoverCategories.css';



class DiscoverCategories extends Component {
  render () {
    return (
      <div>
        <p>DiscoverCategories Page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverCategories);