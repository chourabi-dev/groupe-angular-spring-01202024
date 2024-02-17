package com.ttc.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

import com.ttc.spring.entites.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

	
	// @Query( "DELETE FROM -- WHERE quanrtity = ?" )
	public void deleteByQuantity(int quantity);
}
