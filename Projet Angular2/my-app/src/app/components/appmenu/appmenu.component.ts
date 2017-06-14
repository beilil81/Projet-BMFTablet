import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router/router";
import { CommonService } from "app/service/common.service";
import { Client } from "app/model/client";

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {
  clientOk: boolean;

  quantite:number;
  client:Client;

  constructor(private _commonService : CommonService) { }

  ngOnInit() {
    this._commonService.onClientConnecte.subscribe(cok => {this.clientOk =  cok; console.log("clientOK:"+cok);});
      this._commonService.addQuantite.subscribe(
          qt => this.quantite=qt);
     
 }

}
