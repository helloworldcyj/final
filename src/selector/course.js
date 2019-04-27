import { createSelector } from 'reselect';

export const courseDataSelector = state => state.courseReducer;

export const courseSelector = createSelector(
    courseDataSelector,
    course => course.course
)