package com.tablet.bmf.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tablet.bmf.dao.IClientRepository;
import com.tablet.bmf.entities.Client;
import com.tablet.bmf.entities.Commande;

@Service
public class ClientServiceImpl implements IClientService {

	@Autowired
	private IClientRepository clientDao;
	
	@Override
	public Client create(Client client) {
		Client exist = connect(client);
		Client c = null;
		if(exist != null) {
			c = clientDao.save(client);
		}
		return c;
	}

	@Override
	public Client selectById(Long id) {
		
		Client c = clientDao.findOne(id);
		return c;
	}

	@Override
	public void delete(Long id) {
		System.out.println("TEST DELETE Client id : " +id);
		List<Commande> list = clientDao.getAllCommandeByClientId(id);
		
		if(list != null && list.size()>0) {
			System.out.println("Ne peut pas supprimer ce Client car au moins une commande y est rattachee");
			throw new RuntimeException("Delete Error : Une commande est liee a cet client");
		} else {
			System.out.println("Delete Client : "+ id + " OK");
			clientDao.delete(id);
		}

	}

	@Override
	public List<Client> listClients() {
		List<Client> list = clientDao.findAll();
		return list;
	}

	@Override
	public Client connect(Client c) {
		Client c2=null;
		List<Client> listCli=null;
		try {
			listCli = clientDao.connectClientLogin(c.getEmail(), c.getPassword());
			if(listCli != null && listCli.size()>0) {
				c2 = listCli.get(0);
			}
		} catch (Exception e) {}
		return c2;
	}

}
