import { createReducer, on } from '@ngrx/store';
import { addBook } from './createbook.actions';
import { book } from './interface';

interface Book {
  title: book[];
}

export interface BookState {
  books: Book[];
}

export const initialState: BookState = {
  books: []
};

export const bookReducer = createReducer(
  initialState,
  on(addBook, (state, { booksArray, formValue }) => {
    const newBook: Book = { title: [...booksArray, formValue] };
    return {
      ...state,
      books: [newBook]
    };
  })
);