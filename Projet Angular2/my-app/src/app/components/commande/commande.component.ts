import { Component, OnInit } from '@angular/core';
import { Panier } from "app/model/panier";
import { CommandeService } from "app/service/commande.service";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  paniers:Panier[];
  date:string;

  constructor(private _commandeService : CommandeService) { }

  ngOnInit() {

        //on recherche toutes les commandes
    this._commandeService.getCommandes()
        .subscribe( commandes => {this.paniers = commandes;
                                  this.calcTotal();}, 
                    e => console.log(e.message));

  }


  public  calcTotal(){
        
        this.paniers.forEach(panier => {
          let t:number=0;
            panier.lignes.forEach(lig => {
              t += lig.qt * lig.produit.prix;
            });

            panier.total = t;
        });
       
    }


}
