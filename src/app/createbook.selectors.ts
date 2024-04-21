import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './createbook.reducers';

export const selectBookState = createFeatureSelector<BookState>('books');

// export const selectBooks = createSelector(
//   selectBookState,
//   (state) => state
// );