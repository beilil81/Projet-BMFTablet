package com.tablet.bmf.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tablet.bmf.entities.Client;
import com.tablet.bmf.entities.Commande;

public interface IClientRepository extends JpaRepository<Client, Long>{

	@Query("select c from Commande c where c.client.idClient =:x")
	public List<Commande> getAllCommandeByClientId(@Param("x") long clientId);
	
	@Query("select c from Client c where c.email =:x and c.password = :y")
	public List<Client> connectClientLogin(@Param("x") String email,@Param("y") String password);
}
