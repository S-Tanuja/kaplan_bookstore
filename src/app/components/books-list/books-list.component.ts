import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookComponent } from '../create-book/create-book.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit {
  booksArray !: any;
  filteredBooks!: any;
  searchTerm: string = ''

  constructor(private booksService: BooksService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllBooks()
  }

  getAllBooks() {
    this.booksService.getBooks().subscribe((res) => {
      this.booksArray = res
      this.filteredBooks = this.booksArray
    })
  }

  filterBooks(query: string) {
    this.filteredBooks = this.booksArray.filter((book: any) =>
      (book.volumeInfo.title.toLowerCase().includes(query.toLowerCase()))
    );
  }

  createBook(): void {
    const dialogRef = this.dialog.open(CreateBookComponent, {
      width: '50%',
      height: '65%',
      data: this.booksArray
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
