// import {  createReducer, on } from '@ngrx/store';
// import { createBook } from './createbook.actions';

// export const initialState = 0;

// export const createBookReducer = createReducer(
//   initialState,
//   on(createBook, (state: any, formValue:any) => {
//     return state
// }),
// );

import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './createbook.actions';

export const initialState = 0;

export const createBookReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);