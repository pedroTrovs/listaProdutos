import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Produto[]> {

      return this.http.get<Produto[]>(this.url);
  }
}
