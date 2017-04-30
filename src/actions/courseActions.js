/**
 * Action creator to create course
 * Action should have a type
 * and rest of the structure is optional
 */

export function createCourse(course) {
  return {
    type: 'CREATE_COURSE',
    course
  };
}
