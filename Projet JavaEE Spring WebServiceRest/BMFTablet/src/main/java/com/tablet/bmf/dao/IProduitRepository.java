package com.tablet.bmf.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tablet.bmf.entities.Produit;

@Repository
public interface IProduitRepository extends JpaRepository<Produit, Long> {

	@Query("select p from Produit p where p.categorie.idCategorie =:x")
	public List<Produit> getAllProduitByCategorieId(@Param("x") long categorieId);
	@Query("select p from Produit p where p.designation like %:x% ")
	public List<Produit> produitsParMotCle(@Param("x") String mc);
	@Query("select p from Produit p where p.prix >= :min and p.prix <= :max ")
	public List<Produit> produitsParPrix(@Param("min")double min, @Param("max")double max);

}
