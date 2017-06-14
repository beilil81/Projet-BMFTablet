import { Component, OnInit } from '@angular/core';
import { Client } from "app/model/client";
import { ClientService } from "app/service/client.service";
import { Router } from '@angular/router';
import { CommonService } from "app/service/common.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  message: string;
  client: Client;
  errors: String;
  //clientConnecte: Client;


  constructor(private _clientService: ClientService, private _commonService: CommonService, private _router: Router) { // _userService est injecté ici via angular

  }

  ngOnInit(): void {
    this.client = new Client();
    this.errors = "";
    
  }

  connecterClient(): void {
    console.log(this.client.idClient);
    this._clientService.connectClient(this.client).subscribe(
      clientConnecte => {
        if (clientConnecte) {
          this._commonService.onClientConnecte.next(true);
          localStorage.setItem("clientConnecte", JSON.stringify(clientConnecte));
          console.log("clientOk in on conection :" + JSON.parse(localStorage.getItem("clientOk")));
          let link = ['/'];
          this._router.navigate(link);
          console.log("Client est :" + clientConnecte.nomClient);

        }
      },
      e => {
        console.log(e.message);
        this.message = "Email ou mot passe incorrect";
      });

  }

}
