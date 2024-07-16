import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../Book';
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  newBook: Book = {} as Book;
  isUpdate: boolean = false;
  idCount: number = 1;


  books: Book[] = [];

  saveBook() {
    if (!this.isUpdate) {
      this.newBook.id = this.idCount;
      this.idCount++;
      this.books.push(this.newBook);
    }
    this.isUpdate = false;
    this.newBook = {} as Book;
  }

  update(book: Book) {
    this.newBook = book;
    this.isUpdate = true
    //console.log("Update book: " + book.title);
  }

  remove(removeBook: Book) {
    this.books = this.books.filter(b => b !== removeBook);
    this.books.length + 1;
  }
}


