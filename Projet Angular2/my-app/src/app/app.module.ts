import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppcontentComponent } from './components/appcontent/appcontent.component';
import { AppRoutingModule } from "app/app-routing.module";
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { DeconnexionComponent } from './components/deconnexion/deconnexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ProfilComponent } from './components/profil/profil.component';
import { PanierComponent } from './components/panier/panier.component';
import { DetailproduitComponent } from './components/detailproduit/detailproduit.component';
import { CategorieService } from "app/service/categorie.service";
import { ProduitService } from "app/service/produit.service";
import { HttpModule } from "@angular/http";
import { ClientService } from "app/service/client.service";
import { CategorieComponent } from './components/categorie/categorie.component';
import { CommonService } from "app/service/common.service";
import { PanierService } from "app/service/panier.service";
import { PrixCleProduit } from "app/PIPES/produit.filter";
import { CommandeComponent } from "app/components/commande/commande.component";
import { CommandeService } from "app/service/commande.service";


@NgModule({
  declarations: [
    AppComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppcontentComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    AccueilComponent,
    ConnexionComponent,
    DeconnexionComponent,
    InscriptionComponent,
    ProfilComponent,
    PanierComponent,
    DetailproduitComponent,
    CategorieComponent,
    PrixCleProduit,
    CommandeComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ProduitService, CategorieService,ClientService,CommonService,PanierService,CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
