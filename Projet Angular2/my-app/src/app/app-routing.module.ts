
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { ServicesComponent } from "./components/services/services.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AccueilComponent } from "app/components/accueil/accueil.component";
import { AppcontentComponent } from "app/components/appcontent/appcontent.component";
import { DetailproduitComponent } from "app/components/detailproduit/detailproduit.component";
import { DeconnexionComponent } from "app/components/deconnexion/deconnexion.component";
import { InscriptionComponent } from "app/components/inscription/inscription.component";
import { PanierComponent } from "app/components/panier/panier.component";
import { ConnexionComponent } from "app/components/connexion/connexion.component";
import { CommandeComponent } from "app/components/commande/commande.component";


export const appRoutes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '', component: AppcontentComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'detailproduit/:id', component: DetailproduitComponent },
  { path: 'contact', component: ContactComponent}



]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)

  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { } // export pour rendre la classe "exportable"
//export const routes: ModuleWithProviders= RouterModule.forRoot(router);

