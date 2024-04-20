import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookComponent } from '../create-book/create-book.component';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { query } from '@angular/animations';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit {
booksArray !: any;
searchTerm : string = '' 

constructor(private booksService: BooksService,private dialog: MatDialog){}

ngOnInit(): void {
  this.booksService.getBooks().subscribe((res)=>{
    this.booksArray=res
  })
}

filterBooks(query:string){
  this.booksArray = this.booksArray.filter((book:any) =>
      (book.volumeInfo.title.toLowerCase().includes(query.toLowerCase()))
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
