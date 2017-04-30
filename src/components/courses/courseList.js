import React from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  let courseItem = courses.map( m => {
    return (
      <CourseListRow key={m.id} course={m} />
    );
  });
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {courseItem}
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
