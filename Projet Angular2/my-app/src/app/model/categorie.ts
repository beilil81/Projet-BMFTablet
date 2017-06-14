//sera transdere au format JSON
import { Produit } from "app/model/produit";

export class Categorie {

    idCategorie : number;
    nomCategorie : string;
    description : string;
    nomPhoto : string;
    produits : Produit[];

    constructor (idCategorie : number = 0, 
             nomCategorie : string = "?",
             description : string = "?",
             nomPhoto : string = "?",
             produits : Produit[] = []
             ) {
    
        this.idCategorie = idCategorie;
        this.nomCategorie = nomCategorie;
        this.description = description;
        this.nomPhoto = nomPhoto;
        this.produits = produits;
   
    }


}
