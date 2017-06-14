
import { Component, OnInit } from '@angular/core';
import { Produit } from "app/model/produit";
import { ProduitService } from "app/service/produit.service";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "app/service/common.service";
import { Panier } from "app/model/panier";
import { Ligne } from "app/model/ligne";




@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})

export class DetailproduitComponent implements OnInit {


  private id: number;
  produitSelectionne: Produit; 
  private quantite:number;
  private panier:Panier;

constructor(private _produitService: ProduitService, private route: ActivatedRoute,
private _commonService : CommonService) { }

  ngOnInit(): void {
 this.id = this.route.snapshot.params['id'];
  this._produitService.selectProduitById(this.id)
    .subscribe(produit => { this.produitSelectionne = produit; },
      e => console.log(e.message));

      //je lie ma categorie selectionnee entre mes composant
      this._commonService.addQuantite.subscribe(
          qt => this.quantite=qt);

      //je lie mon panier 
      this._commonService.panierUpdate.subscribe(
          pan => this.panier=pan);          

  }

  /* Quand on ajoute un produit dans un panier */
  public addPanier(p:Produit){

    //on gere l'affichage de la quantite
    this.quantite++;
    //localStorage.setItem("quantite",""+this.quantite);
    console.log("total = "+ this.quantite);
    this._commonService.addQuantite.next(this.quantite);//indispensable, on met la nouvelle valeur a partagee

    //on ajoute le produit dans le panier
    this.addProduitPanier(p);

    this._commonService.panierUpdate.next(this.panier);
    
  }


//quand on ajoute un produit dans un panier, il faut le gerer dans la  liste de Produit et gerer sa qt
  public addProduitPanier(p:Produit){
// TO DO, parcourir le panier et verifier les qt de produit
    let exist = false;

    this.panier.lignes.forEach(lig => {
      if(lig.produit.idProduit === p.idProduit){
        lig.qt++;
        exist = true;
      } 
    });

    if(!exist) {
      this.panier.lignes.push(new Ligne (p,1));
    }
  }//Fin method addProduitPanier(p:Produit)
  
  

}