package com.ttc.spring.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ttc.spring.dto.CategoryModel;
import com.ttc.spring.dto.GeneralResponse;
import com.ttc.spring.entites.Categrory;
import com.ttc.spring.repositories.CategoryRepository;

@RestController
@RequestMapping("/api/v1")
public class CategoryController {

	@Autowired
	private CategoryRepository repo;
	
	
	// GET
	@GetMapping("/category")
	public ResponseEntity<?> getListOFCategroies(){
		List<Categrory> categories = this.repo.findAll(); 
		
		return ResponseEntity.status(200).body(categories);
		
	}
	
	@GetMapping("/category/search")
	public ResponseEntity<?> search( @RequestParam(name="name") String name ){
		List<Categrory> category = this.repo.findByNameContaining(name); 
		
		return ResponseEntity.status(200).body(category);
		
	}
	
	// POST
	@PostMapping("/category")
	public ResponseEntity<?> addCategory( @RequestBody  CategoryModel model ){
		// 1 create the entity
		Categrory entity = new Categrory();
		
		// 2 fill the entity !!!
		entity.setName( model.getName() );
		
		// 3 save the entity in the database !!
		this.repo.save(entity);
		
		// let the user know that we are done !!
		return ResponseEntity.status(200).body( new GeneralResponse(true,"Category insrted successfully") );
	}
	

	// PUT
	@PutMapping("/category/{id}")
	public ResponseEntity<?> updateCategory( @RequestBody  CategoryModel model, @PathVariable(name="id") long id ){
		try {
			// search for the old entity !!!!
			Categrory entity = this.repo.findById(id).get();
			
			// 2 fill the entity !!!
			entity.setName( model.getName() );
			
			// 3 save the entity in the database !!
			this.repo.save(entity); // UPDATE !!
			
			// let the user know that we are done !!
			return ResponseEntity.status(200).body( new GeneralResponse(true,"Category updated successfully") );
		}catch( NoSuchElementException e ) {
			
			return ResponseEntity.status(404).body( new GeneralResponse(false,"Category not found") );
		}
	}
	
	
	// DELETE
	@DeleteMapping("/category/{id}")
	public ResponseEntity<?>deleteCategory( @PathVariable(name="id") long id ){
		try {
			// search for the old entity !!!!
			Categrory entity = this.repo.findById(id).get(); 
			
			//  delete the entity from the database !!
			this.repo.delete(entity); // UPDATE !!
			
			// let the user know that we are done !!
			return ResponseEntity.status(200).body( new GeneralResponse(true,"Category deleted successfully") );
		}catch( NoSuchElementException e ) {
			
			return ResponseEntity.status(404).body( new GeneralResponse(false,"Category not found") );
		}
	}
	
	// SERACH !!!
	// SELECT * FROM CATEGOREIS WHERE name = SPORTS
	
	
	
}
