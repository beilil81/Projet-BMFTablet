import {Pipe, PipeTransform} from '@angular/core'; // imports de Pipe et PipeTransform 

@Pipe({ 
    name: 'filterByMC',
    pure: false // à la moindre modif à l'écran, l'ensemble des composants est relu (à utiliser avec modération car consomme des ressources) 

})

export class MotClePipe implements PipeTransform{
   
    transform(value: any, ...args: any[]): any { // utilisation methode transform dans la classe ItemPipe
       // console.log(value);
        //console.log(args[0]);
        let filtre = args[0].toLowerCase(); // resultat en minuscules
        // return tableau à partir de la collection filtrée
        return filtre ? value.filter(produitFiltre => produitFiltre.name.toLowerCase().indexOf(filtre) != -1) : value; // fonction filter() de javascript
    }
}