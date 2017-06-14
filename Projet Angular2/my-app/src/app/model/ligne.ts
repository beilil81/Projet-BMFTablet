
import { Produit } from "app/model/produit";


/* correspond à une ligne de commande simplifiée pour savoir combien de Produit ont été commandés */
export class Ligne {

    produit:Produit;
    qt : number=0;

    constructor(p:Produit, qt:number=0) {
        this.produit = p;
        this.qt = qt;
    }

}