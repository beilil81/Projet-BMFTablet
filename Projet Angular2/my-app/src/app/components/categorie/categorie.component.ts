import { Component, OnInit } from '@angular/core';
import { Categorie } from "app/model/categorie";
import { CategorieService } from "app/service/categorie.service";
import { ProduitService } from "app/service/produit.service";
import { CommonService } from "app/service/common.service";

@Component({
  selector: 'menu-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

 categories : Categorie[];
 sCat : Categorie;/*qui sera lié au component qui liste les produits*/

  constructor(private _categorieService : CategorieService,
              private _produitService : ProduitService,
              private _commonService : CommonService) { }


  ngOnInit() {
    //on recherche toutes les categories
    this._categorieService.selectAllCategories()
        .subscribe( listClients => {this.categories = listClients;}, 
                    e => console.log(e.message));

    //je lie ma categorie selectionnee entre mes composant
      this._commonService.categorieSelect.subscribe(
          cat => this.sCat=cat);

  }//fin ngOnINit

  /*quand on click sur une categorie pour afficher les produits associes*/
  selectProduits(c : Categorie) {
    console.log(c.nomCategorie);
   this._commonService.categorieSelect.next(c);//indispensable, on met la nouvelle valeur a partagee
  
  }



}
