// import {  createReducer, on } from '@ngrx/store';
// import { createBook } from './createbook.actions';

// export const initialState = 0;

// export const createBookReducer = createReducer(
//   initialState,
//   on(createBook, (state: any, formValue:any) => {
//     return state
// }),
// );

// import { createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './createbook.actions';

// export const initialState = 0;

// export const createBookReducer = createReducer(
//   initialState,
//   on(increment, (state,x) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );

import { createReducer, on } from '@ngrx/store';
import { addBook } from './createbook.actions';

export interface Book {
  title: string;
  author: string;
}

export interface BookState {
  books: Book[];
}

export const initialState: BookState = {
  books: []
};

export const bookReducer = createReducer(
  initialState,
  on(addBook, (state, { title, author }) =>{   
    console.log(title,author)
    return{
    ...state,
    books: [...state.books, { title, author }]
  }})
);