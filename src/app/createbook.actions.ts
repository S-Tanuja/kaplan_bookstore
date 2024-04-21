// import { createAction, props } from '@ngrx/store';

// export const createBook = createAction('createBook', props<{value:any}()>);

// import { createAction } from '@ngrx/store';

// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');

import { createAction, props } from '@ngrx/store';

export const addBook = createAction(
  '[Book] Add Book',
  props<{ booksArray: any, formValue: any }>()
);