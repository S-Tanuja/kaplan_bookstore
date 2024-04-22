# KaplanBookstore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Usage

- Step-1. Run `npm i` to install all the dependencies.
- Step-2. Then run `ng serve` to run the application.
(If error is thrown mentioning 'system doesn't support running scripts', then run the command `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` then the above two steps)

## Project Description

- This project gives a list of books for preparation by Kaplan. 
- The search bar gives you the results filtered based on the search query or the keywords.
- It also provides a button labeled 'Create Book' where the user can add the desired book to the list of books.
- The Save button within the dialog doesn't get enabled until all the field are provided by the user.
- If any path is given manually which doesn't match the flow of appication then a clear message is displayed to the user 'Page Not Found,   Reload'.
- A loader is added to the application if the api response is delayed.




