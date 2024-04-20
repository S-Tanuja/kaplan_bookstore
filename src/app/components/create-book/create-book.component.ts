import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {  increment } from '../../createbook.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent implements OnInit{
bookForm !: FormGroup
count$: Observable<number> ;
constructor(private stores: Store<{ count: number }>,public dialogRef: MatDialogRef<CreateBookComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private store: Store){
  this.createForm()
  this.count$ = stores.select('count');
}

ngOnInit(){
  this.count$.subscribe((count) => {
    console.log('Count:', count);
  });
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
  // this.store.dispatch(createBook({value: this.bookForm.value}));
  this.store.dispatch(increment());
  this.dialogRef.close();
}
onClose(): void {
  this.dialogRef.close();
}
}
