import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books!: any

  public apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(this.apiUrl).pipe(
      map((response:any) => response.items)
    );
  }
}
