import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';



@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.scss'
})
export class SideNavBarComponent implements OnInit{
  loader = false
  constructor(private cdr: ChangeDetectorRef,public booksService : BooksService) {}

  ngOnInit(): void {
    let val = this.booksService.getLoading()
    this.cdr.detectChanges();
    if(this.loader != val ) this.loader = this.booksService.getLoading()
  }
}
