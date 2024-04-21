import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  addBook } from '../../createbook.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBookState } from '../../createbook.selectors';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent implements OnInit{
bookForm !: FormGroup
books$: Observable<any> ;
constructor(private store: Store<{ count: number }>,public dialogRef: MatDialogRef<CreateBookComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder){
  this.createForm()
  this.books$ = this.store.select(selectBookState);
}

ngOnInit(){
  // this.books$.subscribe((count) => {
  //   console.log('Count:', count);
  // });
  // console.log(this.books)
}

createForm(){
  this.bookForm = this.formBuilder.group({
    title: ['', Validators.required],
    authors: ['', Validators.required],
    publisher: ['', Validators.required],
    publishedDate: ['', Validators.required]
  });
}

onSave(){
  console.log(this.bookForm.value)
  this.store.dispatch(addBook({ title:"Abc", author:'xyz' }));
  this.books$.subscribe((count) => {
    console.log('Count:', count);
  });
  this.dialogRef.close();
}
onClose(): void {
  this.dialogRef.close();
}
}
