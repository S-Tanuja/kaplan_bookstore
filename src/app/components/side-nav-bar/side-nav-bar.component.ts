import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';



@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss'
})
export class SideNavBarComponent{
  
  constructor(private cdr: ChangeDetectorRef,public booksService : BooksService) {}

  updateProperty(): void {
    this.booksService.isLoading = true;
    this.cdr.detectChanges();
  }
}
