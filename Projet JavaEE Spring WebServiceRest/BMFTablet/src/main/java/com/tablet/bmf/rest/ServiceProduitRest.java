package com.tablet.bmf.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tablet.bmf.entities.Produit;
import com.tablet.bmf.service.IProduitService;

//@Produces("application/json")
//@Consumes("application/json")
//@Component // ou @Service pour prise en charge par Spring
@CrossOrigin(origins = "*")// ou bien autorisations plus fines
@RestController
@RequestMapping(value="/services")
public class ServiceProduitRest {

	@Autowired
	private IProduitService prodService;

	// @GET
	// @RequestMapping(value = "/all")
	// //url complete : http//localhost:8080/all
	// public List<Categorie> rechercherTousLesAuteurs(){
	// return catService.listCategories();
	// }

	/**
	 * Permet de lister tous les produits
	 * 
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/produits", method = RequestMethod.GET)
	public ResponseEntity<List<Produit>> listProduits() {
		List<Produit> prods = prodService.listProduits();

		if (prods.isEmpty()) {
			return new ResponseEntity<List<Produit>>(prods, HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}

		return new ResponseEntity<List<Produit>>(prods, HttpStatus.OK);
	}

	/**
	 * Permet de lister toutes les categories
	 * 
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/produitsparcategorie/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Produit>> listProduitsByCategorieId(@PathVariable Long id) {
		List<Produit> prods = prodService.listProduitByCategorieID(id);

		if (prods.isEmpty()) {
			return new ResponseEntity<List<Produit>>(prods, HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}

		return new ResponseEntity<List<Produit>>(prods, HttpStatus.OK);
	}
	
	/**
	 * Permet de creer une Produit
	 * 
	 * @param produit
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/produits", method = RequestMethod.POST)
	public ResponseEntity<Produit> saveCategories(@RequestBody Produit produit) {
		Produit prod = prodService.create(produit);

		return new ResponseEntity<Produit>(prod, HttpStatus.OK);
	}

	@RequestMapping(value = "/produits/{id}", method = RequestMethod.DELETE)
	public void DeleteProduit(@PathVariable Long id) {
		prodService.delete(id);

	}

	@RequestMapping(value = "/produits", method = RequestMethod.PUT)
	public Produit update(@RequestBody Produit p) {
		return prodService.update(p);
	}
	
	@RequestMapping(value = "/produits/{id}", method = RequestMethod.GET)
	public Produit selectById(@PathVariable("id") Long id) {
		return prodService.selectById(id);
	}


	@RequestMapping(value = "/produitsnom/{nom}", method = RequestMethod.GET)
    public ResponseEntity<List<Produit>> listAllProduitByNom(@PathVariable String nom) {
        List<Produit> prods = prodService.produitsParMotCle(nom);
        
        
        if (prods.isEmpty()) {
            return new ResponseEntity<List<Produit>>(prods,HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        
        return new ResponseEntity<List<Produit>>(prods, HttpStatus.OK);
    }
	
	// http://localhost:8080/services/produitsprix?min=250&max=500
	@RequestMapping(value = "/produitsprix", method = RequestMethod.GET)
    public ResponseEntity<List<Produit>> listProduitByPrix(@RequestParam double min, double max) {
        List<Produit> prods = prodService.produitsParPrix(min, max);
        
        
        if (prods.isEmpty()) {
            return new ResponseEntity<List<Produit>>(prods,HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        
        return new ResponseEntity<List<Produit>>(prods, HttpStatus.OK);
    }
	

}
