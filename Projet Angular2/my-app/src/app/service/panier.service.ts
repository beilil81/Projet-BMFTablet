import {Categorie} from "../model/categorie";
import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Panier } from "app/model/panier";


@Injectable()
export class PanierService {

    private _headers = new Headers({'Content-Type': 'application/json'});
    private listeCategorie : Categorie[]; //jeux de données (simulations)
    private urlWebService_begin : string = "http://localhost:8080/services/";

    

    constructor (private _http : Http) {
        // _http injecté ici servira a appeler des WS REST
    }

    public recordCommande(p : Panier) : Observable<Panier> {
            // http://localhost:8080/categories
         let urlWS : string = this.urlWebService_begin + "panier";
            console.log("HELLO TEST REST  : " + p.idClient);
        return this._http.post(urlWS, JSON.stringify(p),{headers: this._headers})
                         .map(response => response.json())
                         .catch(e => Observable.throw("error : " + e));
    }


}
