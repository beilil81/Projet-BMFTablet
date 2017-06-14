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
import org.springframework.web.bind.annotation.RestController;

import com.tablet.bmf.entities.Categorie;
import com.tablet.bmf.entities.Produit;
import com.tablet.bmf.service.ICategoryService;

//@Produces("application/json")
//@Consumes("application/json")
@CrossOrigin(origins="*")// ou bien autorisations plus fines
//@CrossOrigin(allowCredentials="false", origins="*", allowedHeaders="header1, header2, header3",exposedHeaders="header1, header2")
@RestController
@RequestMapping(value="/services")
public class ServiceCategorieRest {

	@Autowired
	private ICategoryService catService;
	
//	@GET
//	@RequestMapping(value = "/all")
//	//url complete : http//localhost:8080/all
//	public List<Categorie> rechercherTousLesAuteurs(){
//		return catService.listCategories();
//	}
	
	/**
	 * Permet de lister toutes les categories
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/categories", method = RequestMethod.GET)
    public ResponseEntity<List<Categorie>> listAllCategories() {
        List<Categorie> cats = catService.listCategories();
        
        
        if (cats.isEmpty()) {
            return new ResponseEntity<List<Categorie>>(cats,HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        
        return new ResponseEntity<List<Categorie>>(cats, HttpStatus.OK);
    }
	
	
	/**
	 * Permet de retourner une Categorie precise par son id
	 * @param id
	 * @return ResponseEntity<Categorie>
	 */
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.GET)
	public ResponseEntity<Categorie> selectById(@PathVariable("id") Long id) {
		
		Categorie categorie =  catService.selectById(id);
		 return new ResponseEntity<Categorie>(categorie, HttpStatus.OK);
	}
	
	
	/**
	 * Permet de creer une Categorie
	 * @param categorie
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/categories", method = RequestMethod.POST)
    public ResponseEntity<Categorie> saveCategories(@RequestBody Categorie categorie) {
        Categorie cat = catService.create(categorie);
        
        return new ResponseEntity<Categorie>(cat, HttpStatus.OK);
    }
	
	/**
	 * Permet de modifier une Categorie
	 * @param categorie
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/categories", method = RequestMethod.PUT)
    public ResponseEntity<Categorie> updateCategories(@RequestBody Categorie categorie) {
        Categorie cat = catService.update(categorie);
        
        return new ResponseEntity<Categorie>(cat, HttpStatus.OK);
    }
	
	
	/**
	 * Permet de supprimer une Categorie
	 * @param categorie
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteCategories(@PathVariable Long id) {
        catService.delete(id);
        
        return new ResponseEntity(HttpStatus.OK);
    }
	
	/**
	 * Permet de lister toutes les categories
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/categories/{nom}", method = RequestMethod.GET)
    public ResponseEntity<List<Categorie>> listAllCategoriesByNomCategorie(@PathVariable String nom) {
        List<Categorie> cats = catService.listAllByNomCategorie(nom);
        
        
        if (cats.isEmpty()) {
            return new ResponseEntity<List<Categorie>>(cats,HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        
        return new ResponseEntity<List<Categorie>>(cats, HttpStatus.OK);
    }
	
}
