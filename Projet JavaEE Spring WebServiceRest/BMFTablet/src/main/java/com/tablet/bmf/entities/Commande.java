package com.tablet.bmf.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Commande implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCommande;
	private Date dateCommande;
	@OneToMany(mappedBy = "commande")
	@JsonIgnore
	private List<LigneCommande> items;
	

	@ManyToOne
	@JoinColumn(name = "idClient")
	private Client client;

	public Long getIdCommande() {
		return idCommande;
	}

	public void setIdCommande(Long idCommande) {
		this.idCommande = idCommande;
	}

	public Date getDateCommande() {
		return dateCommande;
	}

	public void setDateCommande(Date dateCommande) {
		this.dateCommande = dateCommande;
	}

	public List<LigneCommande> getItems() {
		return items;
	}

	public void setItems(List<LigneCommande> items) {
		this.items = items;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Commande() {
		super();

	}
	
	public Commande(long idCommande) {
		super();
		this.idCommande = idCommande;
	}
	
	public Commande(Date dateCommande, Client client) {
		super();
		this.dateCommande = dateCommande;
		this.client = client;
	}

	public Commande(Long idCommande, Date dateCommande, List<LigneCommande> items, Client client) {
		super();
		this.idCommande = idCommande;
		this.dateCommande = dateCommande;
		this.items = items;
		this.client = client;
	}

}
