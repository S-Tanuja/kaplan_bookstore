import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit {
booksArray !: any;

constructor(){}

ngOnInit(): void {
  this.getBooksList()
}

getBooksList(){
  this.booksArray=[
        {
          "volumeInfo": {
            "title": "Score Higher",
            "subtitle": "1500 Questions + Online",
            "authors": [
              "Kaplan Test Prep"
            ],
            "publisher": "Kaplan Publishing",
            "publishedDate": "2020-04-07",
          }
        },
        {
          "volumeInfo": {
            "title": "Score Higher on the UCAT",
            "subtitle": "1500 Questions + Online",
            "authors": [
              "Kaplan Test Prep"
            ],
            "publisher": "Kaplan Publishing",
            "publishedDate": "2020-04-07",
          }
        },
        {
          "volumeInfo": {
            "title": "UCAT",
            "subtitle": "1500 Questions + Online",
            "authors": [
              "Kaplan Test Prep"
            ],
            "publisher": "Kaplan Publishing",
            "publishedDate": "2020-04-07",
          }
        }
  ]
}
}
