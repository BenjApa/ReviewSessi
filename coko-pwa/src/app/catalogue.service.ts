import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Catalogue } from '../assets/DB/Catalogue';
import { CatalogueSansId } from '../assets/DB/CatalogueSansId';

@Injectable({
    providedIn: 'root'
})
export class CatalogueService {

    constructor(private http: HttpClient) { }
    public addBook(newBook: CatalogueSansId): Observable<Catalogue> {
        return this.http.post<Catalogue>('http://51.38.236.246:3000/catalogues/', newBook);
        //return this.http.post<Catalogue>('http://localhost:3000/catalogue/', newBook);
    }
    public getBook(id: number): Observable<Catalogue> {
        //this.messageService.add(`HeroService: fetched hero id=${id}`);
        return this.http.get<Catalogue>(`http://51.38.236.246:3000/catalogues/${id}`);
        //return this.http.get<Catalogue>(`http://localhost:3000/catalogue/${id}`);
    }

    public getBooks(): Observable<Catalogue[]> {
        return this.http.get<Catalogue[]>(`http://51.38.236.246:3000/catalogues/`);
        //return this.http.get<Catalogue[]>(`http://localhost:3000/catalogue/`);
    }
    public deleteCatalogue(id: number): Observable<any> {
        return this.http.delete(`http://51.38.236.246:3000/catalogues/${id}`);
        //return this.http.delete(`http://localhost:3000/catalogue/${id}`);
    }
}
