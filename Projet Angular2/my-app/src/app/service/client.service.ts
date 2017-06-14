import { Client } from "../model/client";
import { Headers, Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ClientService {

    private _headers = new Headers({ 'Content-Type': 'application/json' });
    private listeClient: Client[]; //jeux de données (simulations)
    private urlWebService_begin : string = "http://localhost:8080/services/";



    constructor(private _http: Http) {
        // _http injecté ici servira a appeler des WS REST
    }

    public selectAllClients(): Observable<Client[]> {
        //return Observable.of(this.listeClient);

        // // http://localhost:8080/services/clients
        let urlWS: string = this.urlWebService_begin + "clients";

        return this._http.get(urlWS)
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));

    }

    public insertClient(c: Client): Observable<Client> {
        // http://localhost:8080/services/clients
        let urlWS: string = this.urlWebService_begin + "clients";
        c.idClient = null;//pour obliger la creation

        return this._http.post(urlWS, JSON.stringify(c), { headers: this._headers })
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));
    }

    public deleteClient(id: number): Observable<Client> {
        // http://localhost:8080/services/clients
        let urlWS: string = this.urlWebService_begin + "clients";

        return this._http.delete(urlWS + "/" + id)
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));
    }


    public selectClientById(id: number): Observable<Client> {

        let urlWS: string = this.urlWebService_begin + "clients/" + id;
        return this._http.get(urlWS)
            .map(response => response.json())
            .catch(e => Observable.throw("error : " + e));

    }

    public connectClient(client:Client): Observable<Client> {
              
           let urlWS: string = this.urlWebService_begin + "clientsConnect";
           return this._http.post(urlWS, JSON.stringify(client), { headers: this._headers })
             .map(response => response.json())
             .catch(e => Observable.throw('error: ' + e));

    }

    // public connecter(client: Client): Observable<Client> {

    //     let urlWS: string = this.urlWebService_begin + "clients";

    //     return this._http.put(urlWS, JSON.stringify(client), { headers: this._headers }).map(response => response.json())
    //         .catch(e => Observable.throw('error: ' + e));
    // }

    public deconnecter(): void {

        localStorage.removeItem('currentUser');

    }
}