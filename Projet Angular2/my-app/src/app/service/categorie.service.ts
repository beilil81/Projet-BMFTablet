import {Categorie} from "../model/categorie";
import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CategorieService {

    private _headers = new Headers({'Content-Type': 'application/json'});
    private listeCategorie : Categorie[]; //jeux de données (simulations)
    private urlWebService_begin : string = "http://localhost:8080/services/";

    // constructor () {
    //     this.listeCategorie = [
    //         {"idCategorie":1, "nomCategorie":"Samsung", "description":"Tablette Samsung","nomPhoto":"sam.jpg",produits:null},
    //         {"idCategorie":2, "nomCategorie":"Apple", "description":"Tablette Apple","nomPhoto":"apple.jpg",produits:null},
    //         {"idCategorie":3, "nomCategorie":"Huawei", "description":"Tablette Huawei","nomPhoto":"huawei.jpg",produits:null}
    //     ];
    // }
    

    constructor (private _http : Http) {
        // _http injecté ici servira a appeler des WS REST
    }

    public selectAllCategories() : Observable<Categorie[]> {
        //return Observable.of(this.listeCategorie);

        // // http://localhost:8080/categories
        let urlWS : string = this.urlWebService_begin + "categories";

        return this._http.get(urlWS)
                         .map(response => response.json())
                         .catch(e => Observable.throw("error : " + e));

    }

    public majCategorie(c : Categorie) : Observable<Categorie> {
            // http://localhost:8080/categories
         let urlWS : string = this.urlWebService_begin + "categories";

        return this._http.put(urlWS, JSON.stringify(c),{headers: this._headers})
                         .map(response => response.json())
                         .catch(e => Observable.throw("error : " + e));
    }

    public insertCategorie(c : Categorie) : Observable<Categorie> {
            // http://localhost:8080/categories
         let urlWS : string = this.urlWebService_begin + "categories";
         c.idCategorie=null;//pour obliger la creation

        return this._http.post(urlWS, JSON.stringify(c),{headers: this._headers})
                         .map(response => response.json())
                         .catch(e => Observable.throw("error : " + e));
    }

        public deleteCategorie(id : number) : Observable<Categorie> {
            // http://localhost:8080/categories
         let urlWS : string = this.urlWebService_begin + "categories";

        return this._http.delete(urlWS + "/" + id)
                         .map(response => response.json())
                         .catch(e => Observable.throw("error : " + e));
    }


}