import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './createbook.reducers';

export const selectBookState = createFeatureSelector<BookState>('books');