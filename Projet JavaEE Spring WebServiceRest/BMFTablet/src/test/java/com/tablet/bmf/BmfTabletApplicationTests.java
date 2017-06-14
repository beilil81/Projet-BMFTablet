package com.tablet.bmf;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.tablet.bmf.dao.ICategorieRepository;
import com.tablet.bmf.dao.IProduitRepository;
import com.tablet.bmf.entities.Categorie;
import com.tablet.bmf.entities.Produit;
import com.tablet.bmf.service.ICategoryService;
import com.tablet.bmf.service.IProduitService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BmfTabletApplicationTests {

	@Autowired
	private ICategorieRepository catDao;
	@Autowired
	private ICategoryService catService;
	
	@Autowired
	private IProduitRepository pDao;
	@Autowired
	private IProduitService produitService;
	

	@Test
	public void contextLoads() {
	}

	@Test
	public void test() {
		// fail("Not yet implemented");

	

			Categorie c = new Categorie("Apple", "produit apple", "logo_apple.jpg");
			catService.create(c);
			System.out.println("Creation Category");
			
			Produit p = new Produit("IPAD ++",c, "tablette apple",650, "ipad.jpg",5000);
			produitService.create(p);
			System.out.println("Creation Produit");

			// List<Produit> list = p.findAll();
			//
			// for(Produit p : list) {
			// System.out.println(p.getDescription());
			// }


	}
}
