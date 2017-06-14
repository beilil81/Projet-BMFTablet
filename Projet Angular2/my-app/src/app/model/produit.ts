//sera transdere au format JSON
import { Categorie } from "app/model/categorie";

export class Produit {

    idProduit : number;
    designation : string;
    description : string;
    prix : number;
    selected : boolean;
    photo : string;
    quantite : number;
    categorie : Categorie;

    constructor (idProduit : number = 0,
             designation : string = "?",
             description : string = "?",
             prix : number = 0,
             selected : boolean = false,
             photo : string = "?",
             quantite : number = 0,
             categorie : Categorie
             ) {
    
        this.idProduit = idProduit;
        this.designation = designation;
        this.description = description;
        this.prix = prix;
        this.selected = selected;
        this.photo = photo;
        this.quantite = quantite;
        this.categorie = categorie;
   
    }

        


}
/*
	private Long idProduit;
	private String designation;
	private String description;
	private double prix;
	private boolean selected;
	private String photo;
	private int quantite;
	private Categorie categorie;
 */