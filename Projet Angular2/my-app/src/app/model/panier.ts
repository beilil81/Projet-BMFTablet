//sera transdere au format JSON
import { Produit } from "app/model/produit";
import { Ligne } from "app/model/ligne";

export class Panier {

    public idClient : number=0;
    public idCommande : number=0; // utilise ONLY pour l'affichage des commandes
    public date : Date=null;// utilise ONLY pour l'affichage des commandes
    public lignes : Ligne[];
    public total:number;
    
 

    constructor (idClient:number=0,lignes : Ligne[] = []) {
        this.idClient = idClient;
        this.lignes = lignes;
   
    }

 

}
