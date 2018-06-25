import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Category.css';



class Category extends Component {
  render () {
    return (
      <div>
        <p>Category Page</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Category);