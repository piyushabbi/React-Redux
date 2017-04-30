/**
 * Action creator to create course
 * Action should have a type
 * and rest of the structure is optional
 */

import * as types from './actionTypes';

import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

// Thunk
// API Call
export function loadCourses () {
  return function (dispatch) {
    return (
      courseApi.getAllCourses()
        .then( courses => {
          dispatch(loadCoursesSuccess(courses));
        })
        .catch(error => {
          throw(error);
        })
    );
  };
}
