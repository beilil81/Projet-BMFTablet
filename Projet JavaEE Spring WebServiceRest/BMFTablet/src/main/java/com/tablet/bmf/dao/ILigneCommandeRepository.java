package com.tablet.bmf.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tablet.bmf.entities.LigneCommande;

public interface ILigneCommandeRepository extends JpaRepository<LigneCommande, Long> {

}
