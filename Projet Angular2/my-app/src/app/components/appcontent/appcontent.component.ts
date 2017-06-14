import { Component, OnInit } from '@angular/core';
import { ProduitService } from "app/service/produit.service";
import { Produit } from "app/model/produit";
import { CommonService } from "app/service/common.service";
import { Categorie } from "app/model/categorie";
import { Panier } from "app/model/panier";

@Component({
  selector: 'app-appcontent',
  templateUrl: './appcontent.component.html',
  styleUrls: ['./appcontent.component.css']
})
export class AppcontentComponent implements OnInit {
  produits:Produit[];
  sCategorie : Categorie;
  sizeListProduits : number;
  private quantite:number;
  private panier:Panier;

  constructor(private _produitService: ProduitService,
              private _commonService : CommonService) { }

  ngOnInit() {
      //je lie ma categorie selectionnee entre mes composant
      this._commonService.categorieSelect.subscribe(
          cat => {this.sCategorie=cat;
            this.select();
          },
           e => console.log(e.message));
                

      this._produitService.selectAllProduits()
        .subscribe( listProduits => {this.produits = listProduits;
                                    this.sizeListProduits=listProduits.length;    } , 
                    e => console.log(e.message));
                     //je lie ma categorie selectionnee entre mes composant
      this._commonService.addQuantite.subscribe(
          qt => this.quantite=qt);

      //je lie mon panier 
      this._commonService.panierUpdate.subscribe(
          pan => this.panier=pan);    
  }//FIN ngOnInit()

  select(){
    console.log("id = "+this.sCategorie.idCategorie);
     if(this.sCategorie.idCategorie>0){
     this._produitService.selectAllProduitsByCategorie(this.sCategorie.idCategorie)
        .subscribe( listProduits => {this.produits = listProduits;
                                     this.sizeListProduits=listProduits.length;   } , 
                    e => console.log(e.message));
     }
  }

  

}
