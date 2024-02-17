package com.ttc.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ttc.spring.repositories.CategoryRepository;
import com.ttc.spring.repositories.ProductRepository;

@Service
public class ProeuctService {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;

	
	
	public ProductRepository getProductRepository() {
		return productRepository;
	}

	public CategoryRepository getCategoryRepository() {
		return categoryRepository;
	}
	
	
	
	
}
