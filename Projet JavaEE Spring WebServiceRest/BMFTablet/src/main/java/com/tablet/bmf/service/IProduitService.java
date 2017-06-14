package com.tablet.bmf.service;

import java.util.List;

import com.tablet.bmf.entities.Produit;

public interface IProduitService {

	public Produit create(Produit p);
	public Produit selectById(Long id);
	public void delete(Long id);
	public Produit update(Produit p);
	public List<Produit> listProduits();
	public List<Produit> listProduitByCategorieID(long idCategorie);
	public List<Produit> produitsParMotCle(String mc);
	public List<Produit> produitsParPrix(double min, double max);
}
