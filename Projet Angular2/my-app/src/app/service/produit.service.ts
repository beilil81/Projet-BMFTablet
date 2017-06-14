import { Produit } from "../model/produit";
import { Headers, Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProduitService {

    private _headers = new Headers({ 'Content-Type': 'application/json' });

    private listeProduit: Produit[]; //jeux de données (simulations)
    private urlWebService_begin : string = "http://localhost:8080/services/";

    constructor(private _http: Http) {

    }

    public selectAllProduits(): Observable<Produit[]> {
        //return Observable.of(this.listeProduit);

        let urlWS: string = this.urlWebService_begin + "produits";
        return this._http.get(urlWS)
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));

    }


    public selectAllProduitsByCategorie(idCategorie: number): Observable<Produit[]> {
        //return Observable.of(this.listeProduit);

        let urlWS: string = this.urlWebService_begin + "produitsparcategorie/" + idCategorie;
        return this._http.get(urlWS)
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));

    }
    public majProduit(p: Produit): Observable<Produit> {
        console.log(p);
        let urlWS: string = this.urlWebService_begin + "produits";
        return this._http.put(urlWS, JSON.stringify(p), { headers: this._headers })
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));
    }

    public insertProduit(p: Produit): Observable<Produit> {
        // http://localhost:8080/produits
        let urlWS: string = this.urlWebService_begin + "produits";
        p.idProduit = null;//pour obliger la creation

        return this._http.post(urlWS, JSON.stringify(p), { headers: this._headers })
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));
    }

    public deleteProduit(id: number): Observable<Produit> {
        // http://localhost:8080/produits
        let urlWS: string = this.urlWebService_begin + "produits";

        return this._http.delete(urlWS + "/" + id)
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));
    }

    public selectProduitById(id: number): Observable<Produit> {

        let urlWS: string = this.urlWebService_begin + "produits/" + id;
        return this._http.get(urlWS)
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));

    }


}