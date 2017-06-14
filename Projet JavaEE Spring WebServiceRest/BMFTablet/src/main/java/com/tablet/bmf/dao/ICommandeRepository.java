package com.tablet.bmf.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tablet.bmf.entities.Commande;

public interface ICommandeRepository extends JpaRepository<Commande, Long> {

}
