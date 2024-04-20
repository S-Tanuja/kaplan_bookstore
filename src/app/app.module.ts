import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BooksListComponent } from './components/books-list/books-list.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BooksService } from './books.service';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
// import { createBook } from './createbook.actions'; 
import { createBookReducer } from './createbook.reducers';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    BooksListComponent,
    SideNavBarComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({createBook: createBookReducer }),
    StoreModule.forRoot(reducers, {
      metaReducers,
    })
  ],
  providers: [
    provideAnimationsAsync(),
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
