import { ProdutoService } from './../produto.service';
import { Component } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  products: Produto[] = [];

  constructor(private service: ProdutoService){}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(){
    this.service.getProducts().subscribe(
      {
          next:  data =>  this.products = data,
          error: msg  => console.log("Erro ao chamar o endpoint " + msg)
      }
    );
}
}
