/**
 * Action creator to create course
 * Action should have a type
 * and rest of the structure is optional
 */

import * as types from './actionTypes';

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course
  };
}
