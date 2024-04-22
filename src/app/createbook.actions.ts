import { createAction, props } from '@ngrx/store';

export const addBook = createAction(
  '[Book] Add Book',
  props<{ booksArray: any, formValue?: any }>()
);