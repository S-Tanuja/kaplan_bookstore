import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookComponent } from '../create-book/create-book.component';
import { book, volumeInfo } from '../../interface';
import { addBook } from '../../createbook.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})

export class BooksListComponent implements OnInit {
  booksArray !: book[];
  filteredBooks!: book[] ;
  searchTerm: string = '';
  noResultsFound: boolean = false;

  constructor(private router: Router, private booksService: BooksService, private dialog: MatDialog,private store: Store<{ count: number }>) { }

  ngOnInit(): void {
    this.getAllBooks()
  }

  updateLoading(value: boolean): void {
    this.booksService.setLoading(value);
  }

  getAllBooks() {
    this.updateLoading(true)
    this.booksService.getBooks().subscribe((res) => {
      this.updateLoading(false)
      this.booksArray = res
      this.filteredBooks = this.booksArray
    },
    (error) => {
      this.updateLoading(false);
      this.router.navigate(['/**']);
    })
  }

  filterBooks(query: string) {
    this.filteredBooks = this.booksArray.filter((book: any) =>
      (book.volumeInfo.title.toLowerCase().includes(query.toLowerCase()))
    );
    this.noResultsFound = this.filteredBooks.length === 0; 
  }
  

  createBook(): void {
    const dialogRef = this.dialog.open(CreateBookComponent, {
      width: '50%',
      height: '65%',
      data: this.filteredBooks
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.books) {
        const updatedarray = result?.books[0]?.title
        this.filteredBooks = updatedarray;
        this.store.dispatch(addBook({ booksArray:this.filteredBooks }));
      }
    });
  }
}
