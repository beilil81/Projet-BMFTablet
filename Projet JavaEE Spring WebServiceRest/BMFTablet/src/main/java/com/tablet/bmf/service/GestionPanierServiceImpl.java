package com.tablet.bmf.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tablet.bmf.dao.IClientRepository;
import com.tablet.bmf.dao.ICommandeRepository;
import com.tablet.bmf.dao.ILigneCommandeRepository;
import com.tablet.bmf.dao.IProduitRepository;
import com.tablet.bmf.entities.Client;
import com.tablet.bmf.entities.Commande;
import com.tablet.bmf.entities.Ligne;
import com.tablet.bmf.entities.LigneCommande;
import com.tablet.bmf.entities.Panier;
import com.tablet.bmf.entities.Produit;

@Transactional
@Service
public class GestionPanierServiceImpl implements IGestionPanierService {

	@Autowired
	private IProduitRepository produitDao;
	@Autowired
	private ICommandeRepository commandeDao;
	@Autowired
	private ILigneCommandeRepository lcDao;
	@Autowired
	private IClientRepository clientDao;

	@Override
	public boolean validationStockCommande(Panier panier) {
		boolean valid = true;

		for (Ligne lc : panier.getLignes()) {
			int stock = lc.getProduit().getQuantite();
			int quantite = lc.getQt();
			System.out.println("stock QT1 : " + stock);
			System.out.println("quantite QT2 : " + quantite);
			if (stock < quantite) {
				valid = false;
				System.out.println("PPProbleme de Stock Insuffisant");
				Logger.getLogger(GestionPanierServiceImpl.class).debug("Probleme de Stock Insuffisant");
			}
		}

		return valid;
	}

	@Override
	public boolean ajoutCommande(Panier panier) {
		boolean status = true;
		System.out.println("TOTO 1 ");
		if (validationStockCommande(panier) == true) {

			majStockAndSaveProduit(panier);
			System.out.println("TOTO 4 idClient = " + panier.getIdClient());
			Client client = clientDao.findOne(panier.getIdClient());
			Commande commande = new Commande(new Date(), client);
			System.out.println("TOTO 5 : idcommande = " + commande.getIdCommande());
			commandeDao.save(commande);
			System.out.println("TOTO 6 ");
			for (Ligne l : panier.getLignes()) {
				LigneCommande lc = new LigneCommande(l.getProduit(), l.getQt(), commande.getIdCommande());
				System.out.println("TOTO 7 ");
				insertLigneCommande(lc);
				System.out.println("TOTO 9 ");
			}

		}

		return status;

	}

	/**
	 * on supprime des stocks les produits qui ont été achetés
	 */
	@Override
	public void majStockAndSaveProduit(Panier panier) {
		System.out.println("TOTO 2 ");
		for (Ligne lc : panier.getLignes()) {
			Produit p = lc.getProduit();
			System.out.println("TOTO 2 QT : ");
			p.setQuantite(p.getQuantite() - lc.getQt());
			produitDao.save(p);
			System.out.println("TOTO 3 ");
		}

	}

	@Override
	public LigneCommande insertLigneCommande(LigneCommande lc) {
		System.out.println("TOTO 8 ");
		LigneCommande ligC = lcDao.save(lc);
		return ligC;

	}

	// Panier(Long idClient,Long idCommande, Date date, List<Ligne> lignes)
	@Override
	public List<Panier> commandes() {

		List<Panier> paniers= new ArrayList<Panier>();
		try{
			List<Commande> commandes = commandeDao.findAll();
			for(Commande c : commandes) {
				Panier p = new Panier();
				p.setIdClient(c.getClient().getIdClient());
				p.setIdCommande(c.getIdCommande());
				p.setDate(c.getDateCommande());
				for(LigneCommande lc : c.getItems()) {
					Ligne lig = new Ligne(lc.getQuantite(),lc.getProduit());
					p.getLignes().add(lig);
				}
				paniers.add(p);
			}
		} catch(Exception e) {
			
		}
		return paniers;
	
	}

}
