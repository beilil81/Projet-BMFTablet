package com.tablet.bmf.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * 
 * @author bmf
 * LigneDTO
 */

public class Ligne implements Serializable {
	/**
	 * 
	 */

	private int qt;
	private Produit produit;


	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	public int getQt() {
		return qt;
	}

	public void setQt(int qt) {
		this.qt = qt;
	}



	public Ligne() {
		super();
	}

	public Ligne(int qt,Produit produit) {
		super();
		this.qt = qt;
		this.produit = produit;
	}

}