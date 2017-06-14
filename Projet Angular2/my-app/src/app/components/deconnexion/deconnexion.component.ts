import { Component, OnInit } from '@angular/core';
import { Client } from "app/model/client";
import { ClientService } from "app/service/client.service";
import { CommonService } from "app/service/common.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent {
  [x: string]: any;
  errors: string;
  client: Client;
  ngOnInit(): void { 
      this.client = new Client();
      this.errors = "";

    }
 constructor(private _clientService: ClientService, private _router: Router, private _commonService: CommonService) { // _userService est injecté ici via angular
      
  }
  deconnecterClient(): void {
       //connexion client
        let client= localStorage.getItem("clientConnecte");
        if(client){
            this.onClientConnecte.next(true);
            console.log("clientOk in common constructeur client connecte:"+JSON.parse(localStorage.getItem("clientOk")));
        }   
          this.onClientConnecte.subscribe(clientOk=>{localStorage.setItem("clientOk",JSON.stringify(clientOk))});
          console.log("clientOk in common constructeur:"+JSON.parse(localStorage.getItem("clientOk")));
                                                
           this._commonService.onClientConnecte.next(false);
           //localStorage.removeItem("clientOk");
           //this._commonService.onClientConnecte.next(false);
           let link=['/connexion'];
           this._router.navigate(link);    
          
        }
        

  }

