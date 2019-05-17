import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {Catalogue} from "../../assets/DB/Catalogue";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  allBooks: Catalogue[];
  searchText:string;
  constructor( private catalogueService: CatalogueService) { }
  getBooks(): void {
    this.catalogueService.getBooks()
      .subscribe(book => this.allBooks = book);
  }
  ngOnInit() {
    this.getBooks();
  }

}
