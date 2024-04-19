import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.scss'
})
export class CreateBookComponent {
bookForm : FormGroup
constructor(public dialogRef: MatDialogRef<CreateBookComponent>, private formBuilder: FormBuilder){
  this.bookForm = this.formBuilder.group({
    title: ['', Validators.required],
    authors: ['', Validators.required],
    publisher: ['', Validators.required],
    publishedDate: ['', Validators.required]
  });
}

onSave(){
  console.log(this.bookForm.value)
}
onClose(): void {
  this.dialogRef.close();
}
}
