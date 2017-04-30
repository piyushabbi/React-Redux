import React, { Component } from 'react';

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
    console.log(`Saving ... ${this.state.course.title}`);
  }

  render () {
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
      </div>
    );
  }
}

export default CoursesPage;
