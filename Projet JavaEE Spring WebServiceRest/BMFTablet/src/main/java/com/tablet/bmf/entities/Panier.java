package com.tablet.bmf.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Panier {

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	private Long idClient;
	private Long idCommande;
	private Date date;
	private List<Ligne> lignes;
	private double total;
	
	
	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public Panier() {
		super();
		this.setLignes(new ArrayList<Ligne>());
		
	}

	public Panier(Long idClient, List<Ligne> lignes) {
		super();
		this.idClient = idClient;
		this.lignes = lignes;
	}
	
	/*utilise pour afficher toutes les commandes*/
	public Panier(Long idClient,Long idCommande, Date date, List<Ligne> lignes) {
		super();
		this.idClient = idClient;
		this.idCommande = idCommande;
		this.date = date;
		this.lignes = lignes;
	}
	
	public Long getIdCommande() {
		return idCommande;
	}

	public void setIdCommande(Long idCommande) {
		this.idCommande = idCommande;
	}

	public Long getIdClient() {
		return idClient;
	}
	public void setIdClient(Long idClient) {
		this.idClient = idClient;
	}
	public List<Ligne> getLignes() {
		return lignes;
	}
	public void setLignes(List<Ligne> lignes) {
		this.lignes = lignes;
	}
	
}
