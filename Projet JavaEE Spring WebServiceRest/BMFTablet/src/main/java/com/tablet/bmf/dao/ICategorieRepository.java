package com.tablet.bmf.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tablet.bmf.entities.Categorie;

/**
 * 
 * @author BMF utilisation de spring data
 *
 */
@Repository
public interface ICategorieRepository extends JpaRepository<Categorie, Long> {
     
	@Query("select c from Categorie c where c.nomCategorie like %:x% ")
	public List<Categorie> listAllByNomCategorie(@Param("x") String categorieId);
	
}



