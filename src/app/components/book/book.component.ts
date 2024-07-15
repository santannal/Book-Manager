import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../Book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book: Book = {
    id: 1,
    title: 'Leonardo',
    author: 'Santanna',
    price: 50.00
  };
}
