package com.tablet.bmf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tablet.bmf.dao.ICategorieRepository;
import com.tablet.bmf.dao.IProduitRepository;
import com.tablet.bmf.entities.Categorie;
import com.tablet.bmf.entities.Produit;

@Service
public class CategoryServiceImpl implements ICategoryService {

	@Autowired
	ICategorieRepository catDao;
	@Autowired
	IProduitRepository pDao;
	
	@Override
	public Categorie create(Categorie c) {

		Categorie cat = catDao.save(c);
		
		return cat;
	}

	@Override
	public void delete(Long id) {
		System.out.println("TEST DELETE Cat id : " +id);
		List<Produit> list = pDao.getAllProduitByCategorieId(id);
		
		if(list != null && list.size()>0) {
			System.out.println("Ne peut pas supprimer cette Categorie car au moins un produit y est rattache");
			throw new RuntimeException("Delete Error : Un produit est lie a cette categorie");
		} else {
			System.out.println("Delete Categorie : "+ id + " OK");
			catDao.delete(id);
		}

	}

	@Override
	public Categorie update(Categorie c) {

		Categorie c2 = catDao.save(c);
		
		return c2;
	}

	@Override
	public List<Categorie> listCategories() {

		List<Categorie> list = catDao.findAll();
		
		return list;
	}

	@Override
	public Categorie selectById(Long id) {

		Categorie c = catDao.findOne(id);
		return c;
	}

	@Override
	public List<Categorie> listAllByNomCategorie(String nomCategorie) {
		List<Categorie> list = catDao.listAllByNomCategorie(nomCategorie);
		return list;
	}



}
