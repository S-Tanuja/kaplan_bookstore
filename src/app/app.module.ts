import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BooksListComponent } from './components/books-list/books-list.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './books.service';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { bookReducer } from './createbook.reducers';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const MatImportsArray = [
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatProgressSpinnerModule
]

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    BooksListComponent,
    SideNavBarComponent,
    CreateBookComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ...MatImportsArray,
    StoreModule.forFeature('books', bookReducer),
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
