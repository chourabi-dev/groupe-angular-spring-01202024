package com.ttc.spring.repositories;

import com.ttc.spring.entites.Categrory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Categrory,Long> {
	
	
	List<Categrory> findByNameContaining(String name);

}
