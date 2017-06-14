package com.tablet.bmf.service;

import java.util.List;

import com.tablet.bmf.entities.LigneCommande;
import com.tablet.bmf.entities.Panier;

public interface IGestionPanierService {

	public boolean validationStockCommande(Panier panier);
	public boolean ajoutCommande(Panier panier);
	public void majStockAndSaveProduit(Panier panier);
	public LigneCommande insertLigneCommande(LigneCommande lc);
	public List<Panier> commandes();
	
}
