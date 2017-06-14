import { Component, OnInit } from '@angular/core';
import { CommonService } from "app/service/common.service";
import { Panier } from "app/model/panier";
import { Ligne } from "app/model/ligne";
import { PanierService } from "app/service/panier.service";
import { Client } from "app/model/client";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  idClient:any;
  quantite:number;
  panier : Panier;

  constructor(private _panierService: PanierService,
              private _commonService : CommonService) { }

  ngOnInit() {
          this._commonService.addQuantite.subscribe(
          qt => this.quantite=qt);

           this._commonService.panierUpdate.subscribe(
          pan => this.panier=pan);

          this.calcTotal();
  }

  viderPanier() {
    
    this._commonService.addQuantite.next(0);//indispensable, on met la nouvelle valeur a partagee
    this._commonService.panierUpdate.next(new Panier());
    this.panier.total=0;
  }

  suppProduit(li:Ligne){
    let exist = false;
    let newListLignes=[];
    console.log("coucoucou")
    this.panier.lignes.forEach(lig => {
      if(lig.produit.idProduit != li.produit.idProduit){
        newListLignes.push(lig);
      } 
    });

    this.panier.lignes = newListLignes;
    this._commonService.panierUpdate.next(this.panier);
    this._commonService.addQuantite.next(this.quantite - li.qt);
    this.calcTotal();
}

  passerCommande() {
 let client:Client=  JSON.parse(localStorage.getItem("clientConnecte"));
    this.panier.idClient=client.idClient;
    console.log("panier idClient = " + this.panier);
    this._panierService.recordCommande(this.panier)
    .subscribe( pan => {
                  //qd on passe commande, on vide le panier
                  this._commonService.panierUpdate.next(new Panier());
                  this._commonService.addQuantite.next(0);  
                  }, 
                    e => console.log(e.message));;
  }



  public  calcTotal(){
        

          let t:number=0;
            this.panier.lignes.forEach(lig => {
              t += lig.qt * lig.produit.prix;
            });
            this.panier.total = t;
    }

}
