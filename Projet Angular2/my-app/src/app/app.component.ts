import { Component, OnInit } from '@angular/core';
import { Produit } from "app/model/produit";
import { ProduitService } from "app/service/produit.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
   produits : Produit[];

   constructor(private _produitService : ProduitService) {
    // _categorieService est injecté ici via angular
    // _produitService est injecté ici via angular

  }
  ngOnInit(): void {
    
this._produitService.selectAllProduits()
        .subscribe( listProduits => {this.produits = listProduits;
                                } , 
                    e => console.log(e.message));

  }
  
}
