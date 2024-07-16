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

  books: Book[] = [
    {
      id: 1,
      title: "first title",
      author: "Leo",
      price: 29.90,
    },
    {
      id: 2,
      title: "SECOND title",
      author: "AUTOR 2",
      price: 39.90,
    },
    {
      id: 3,
      title: "third title",
      author: "AUTOR 3",
      price: 49.90,
    }
  ];

  saveBook() {
    this.newBook.id = this.books.length + 1;
    this.books.push(this.newBook);
    this.newBook = {} as Book;
  }
}


