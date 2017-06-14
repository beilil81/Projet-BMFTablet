/*permet de faire naviguer les infos d'un composant vers un autre*/

import { Injectable } from "@angular/core";
//import { Observable } from "rxjs/Observable";
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { Categorie } from "app/model/categorie";
import { Panier } from "app/model/panier";


@Injectable()
export class CommonService {
    c: Categorie = new Categorie();
    quantite: number = 0;
    panier: Panier = new Panier();
    clientOk: string = 'false';

    //predifined in browser (like console) :
    //localStorage: Storage;//.removeItem(key) , .getItem(key) .setItem(key,value) , .length 

    public categorieSelect: BehaviorSubject<Categorie>
    = new BehaviorSubject(this.c);

    public addQuantite: BehaviorSubject<number>
    = new BehaviorSubject(this.quantite);

    public panierUpdate: BehaviorSubject<Panier>
    = new BehaviorSubject(this.panier);
    //connexion du client
    public onClientConnecte: BehaviorSubject<boolean>
    = new BehaviorSubject(false);

    constructor() {
        this.quantite = parseInt(localStorage.getItem("quantite")) || 0;
        console.log("qt = " + this.quantite);
        this.addQuantite.next(this.quantite);//indispensable, on met la nouvelle valeur a partagee
        this.addQuantite.subscribe(b => localStorage.setItem("quantite", b + ""));


        //console.log("panier relu dans localstorage = " + localStorage.getItem("panier"));
        this.panier = JSON.parse(localStorage.getItem("panier")) || new Panier();
        this.panierUpdate.next(this.panier);
        //console.log("panier === " + this.panier);
        this.panierUpdate.subscribe(p => localStorage.setItem("panier", JSON.stringify(p)));

    }
}