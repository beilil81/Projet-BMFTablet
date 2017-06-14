package com.tablet.bmf.service;

import java.util.List;

import com.tablet.bmf.entities.Client;

public interface IClientService {

	public Client create(Client c);
	public Client connect(Client c);
	public Client selectById(Long id);
	public void delete(Long id);
	public List<Client> listClients();
	
}
