package com.tablet.bmf.service;

import java.util.List;

import com.tablet.bmf.entities.Categorie;

public interface ICategoryService {

	public Categorie create(Categorie c);
	public Categorie selectById(Long id);
	public void delete(Long id);
	public Categorie update(Categorie c);
	public List<Categorie> listCategories();
	public List<Categorie> listAllByNomCategorie(String nomCategorie);

	
}
