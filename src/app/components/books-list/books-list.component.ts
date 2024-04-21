import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookComponent } from '../create-book/create-book.component';
import { book, volumeInfo } from '../../interface';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})

export class BooksListComponent implements OnInit {
  booksArray !: book[];
  filteredBooks!: book[] ;
  searchTerm: string = ''

  constructor(private booksService: BooksService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllBooks()
  }

  updateLoading(value: boolean): void {
    this.booksService.setLoading(value);
  }

  getAllBooks() {
    this.updateLoading(true)
    this.booksService.getBooks().subscribe((res) => {
      this.booksArray = res
      this.filteredBooks = this.booksArray
      this.updateLoading(false)
    },
    (error) => {
      this.updateLoading(false)
      console.error('Error fetching data:', error);
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
      if (this.filteredBooks.length < result.books[0]?.title.length && result.books[0].title) {
        const updatedarray = result.books[0]?.title
        this.filteredBooks = updatedarray;
      }
    });
  }
}
