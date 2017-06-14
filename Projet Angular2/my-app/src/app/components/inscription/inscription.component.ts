import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from "app/service/client.service";
import { Client } from "app/model/client";

@Component({ 
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  client: Client;
  errors: String;
  constructor(private _clientService: ClientService, private _router: Router) {

  }

  ngOnInit(): void {
    this.client = new Client();
    this.errors = "";

  //  this._clientService.selectClientById(1);
  //  .subscribe(selectC =>{this.client=selectC;
  //  },
  //  e=>console.log(e.message));

      

}

insertClient():void{
  this._clientService.connectClient(this.client).subscribe(
      clien => { this._router.navigate(['/connexion']); this.errors = ""; },
      e => { console.log(e.message); this.errors = "Echec d'authentification, veuillez réssayer svp" });
  }

  // connecterClient(): void {
  //   this._clientService.connecter(this.client).subscribe(
  //     clien => { this._router.navigate(['/connexion']); this.errors = ""; },
  //     e => { console.log(e.message); this.errors = "Echec de connexion, vueillez réssayer svp" });
  // }

   

} 
