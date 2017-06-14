package com.tablet.bmf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tablet.bmf.dao.IProduitRepository;
import com.tablet.bmf.entities.Produit;

@Service
public class ProduitServiceImpl implements IProduitService {

	@Autowired
	IProduitRepository produitDao;

	@Override
	public Produit create(Produit p) {

		Produit p2 = produitDao.save(p);

		return p2;
	}

	@Override
	public void delete(Long id) {
		System.out.println("TEST DELETE Produit id : " + id);
		produitDao.delete(id);

	}

	@Override
	public Produit update(Produit p) {

		Produit p2 = produitDao.save(p);

		return p2;
	}

	@Override
	public List<Produit> listProduits() {

		List<Produit> list = produitDao.findAll();

		return list;
	}

	@Override
	public Produit selectById(Long id) {

		Produit c = produitDao.findOne(id);
		return c;
	}

	@Override
	public List<Produit> listProduitByCategorieID(long idCategorie) {
		List<Produit> list = produitDao.getAllProduitByCategorieId(idCategorie);
		return list;
	}

	@Override
	/**
	 * @return
	 */
	public List<Produit> produitsParMotCle(String mc) {
		List<Produit> listes = produitDao.produitsParMotCle(mc);
		if (listes == null) {
			System.out.println("Liste est null");
		} else {

			System.out.println("taille de la liste " + listes.size());
		}
		return listes;
	}

	/**
	 * Permet de selectionner les Produits entre une fourchette de prix (min et max)
	 */
	@Override
	public List<Produit> produitsParPrix(double min, double max) {
		List<Produit> list = produitDao.produitsParPrix(min, max);
		return list;
	}

}
