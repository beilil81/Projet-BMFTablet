package com.tablet.bmf.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tablet.bmf.entities.Commande;
import com.tablet.bmf.entities.Panier;
import com.tablet.bmf.service.IGestionPanierService;

@CrossOrigin(origins = "*") // ou bien autorisations plus fines
@RestController
@RequestMapping(value = "/services")
public class ServicePanierRest {

	@Autowired
	private IGestionPanierService panierService;


	/**
	 * Permet d'ajouter une Commande
	 * 
	 * @param panier
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/panier", method = RequestMethod.POST)
	public ResponseEntity<Boolean> savePanier(@RequestBody Panier panier) {
		boolean status=false;

		try{
			status = panierService.ajoutCommande(panier);
		} catch(Exception e) {
			return new ResponseEntity<Boolean>(status, HttpStatus.CONFLICT);
		}

		return new ResponseEntity<Boolean>(status, HttpStatus.OK);
	}
	
	
	/**
	 * Permet de recuperer toutes les commandes
	 * 
	 * @param panier
	 * @return ResponseEntity
	 */
	@RequestMapping(value = "/commandes", method = RequestMethod.GET)
	public ResponseEntity<List<Panier>> getCommandes() {
		List<Panier> paniers= new ArrayList<Panier>();

		try{
			paniers = panierService.commandes();
			
		} catch(Exception e) {
			return new ResponseEntity<List<Panier>>(paniers, HttpStatus.CONFLICT);
		}

		return new ResponseEntity<List<Panier>>(paniers, HttpStatus.OK);
	}



}
