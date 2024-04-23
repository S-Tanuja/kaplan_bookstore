import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books!: any
  isLoading: boolean = false;

  public apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';

  constructor(private http: HttpClient) { }

  setLoading(value: boolean): void {
    this.isLoading = value;
  }

  getLoading(): boolean {
    return this.isLoading;
  }
  
  getBooks() {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => response.items)
    );
  }
}
