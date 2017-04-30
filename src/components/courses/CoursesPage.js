import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
  constructor (props) {
    super(props);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

    this.state = {
      course: {
        title: ''
      }
    };
  }

  onTitleChange (e) {
    const course = this.state.course;
    course.title = e.target.value;

    this.setState({
      course: course
    });
  }

  onClickSave (e) {
    e.preventDefault();
    this.props.createCourse(this.state.course);
  }

  displayAddedCourses (course, i) {

  }

  render () {
    let addedCourses = this.props.courses.map( (m,i) => {
      return <li key={i}>{m.title}</li>;
    });

    return (
      <div>
        <h1>Courses Page</h1>
        <h3>Add a Course:-</h3>

        <input type="text"
              onChange={this.onTitleChange}
              value={this.state.course.title} />

        <input type="submit"
              value="Save"
              onClick={this.onClickSave} />

        <h3>Added Courses:-</h3>
        <ol>{addedCourses}</ol>
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
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect (mapStateToProps, mapDispatchStateToProps) (CoursesPage);
