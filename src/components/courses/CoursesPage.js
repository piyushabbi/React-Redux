import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';

class CoursesPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Courses Page</h1>

        <h3>Added Courses:-</h3>
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchStateToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect (mapStateToProps, mapDispatchStateToProps) (CoursesPage);
