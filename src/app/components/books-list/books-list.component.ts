import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookComponent } from '../create-book/create-book.component';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit {
booksArray !: any;
// searchTerm : string = '' 

searchTerm = new FormControl('');
constructor(private booksService: BooksService,private dialog: MatDialog){
  this.searchTerm.valueChanges.pipe(
    debounceTime(300), 
    distinctUntilChanged() 
  ).subscribe((value: string | null) => {
    if (value !== null) {
      this.filterBooks(value)
    } else {
      alert('No results found')
    }
  });
}

ngOnInit(): void {
  this.filterBooks('')
}

filterBooks(query:string){
  if (!this.booksArray) {
    return; 
  }

  this.booksArray = this.booksArray.filter((book:any) =>
    (book.title && book.title.toLowerCase().includes(query.toLowerCase()))
  );


}

createBook(): void {
  const dialogRef = this.dialog.open(CreateBookComponent, {
    width: '50%',
    height:'65%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
}
