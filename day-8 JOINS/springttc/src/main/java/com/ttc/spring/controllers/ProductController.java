package com.ttc.spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ttc.spring.dto.GeneralResponse;
import com.ttc.spring.dto.ProductModel;
import com.ttc.spring.entites.Categrory;
import com.ttc.spring.entites.Product;
import com.ttc.spring.services.ProeuctService;

@RestController
@RequestMapping("/api/v1")
public class ProductController {

	@Autowired
	private ProeuctService productService;
	
	
	@GetMapping("/product")
	public ResponseEntity<?> getAll(){
		return ResponseEntity.ok( this.productService.getProductRepository().findAll() );  
	}
	
	
	// POST REPO category !!
	@PostMapping("/product")
	public ResponseEntity<?> addNewProduct( @RequestBody ProductModel model ){
		
		
		// 1 CREATE ENTITY !!!
		Product p = new Product();
		
		// 2 fill the entity
		
		p.setProduct(model.getProduct());
		p.setPrice(model.getPrice());
		p.setQuantity(model.getQuantity());
		
		
		Categrory category;
		
		try {
			category = this.productService.getCategoryRepository().findById( model.getCategory() ).get();                        
			p.setCategory(  category   );
			
			// SAVE ENTITY §§§
			this.productService.getProductRepository().save(p);
			return ResponseEntity.status(200).body( new GeneralResponse(true, "Product inserted successfully." ) );
			
		
		}catch( Exception e ) {
			return ResponseEntity.status(404).body( new GeneralResponse(false, "Category not found" ) );
			
		} 

	}
	
	
	
	
	
	
	
	
	
	@PutMapping("/product/{id}")
	public ResponseEntity<?> updateProduct( @RequestBody ProductModel model, @PathVariable(name="id") long id ){
		
		Product p;
		 
		 try {
			   p =  this.productService.getProductRepository().findById(id).get();
			   // 2 fill the entity
				
				p.setProduct(model.getProduct());
				p.setPrice(model.getPrice());
				p.setQuantity(model.getQuantity());
				
				
				Categrory category;
				
				try {
					category = this.productService.getCategoryRepository().findById( model.getCategory() ).get();                        
					p.setCategory(  category   );
					
					// SAVE ENTITY §§§
					this.productService.getProductRepository().save(p);
					return ResponseEntity.status(200).body( new GeneralResponse(true, "Product updated successfully." ) );
					
				
				}catch( Exception e ) {
					return ResponseEntity.status(404).body( new GeneralResponse(false, "Category not found" ) );
					
				} 
		 }catch(Exception e) {
			 return ResponseEntity.status(404).body( new GeneralResponse(false, "product not found" ) );
		 }
		

	}
	
	
	
	
	// DELETE
	@DeleteMapping("/product/{id}")
	public ResponseEntity<?> deleteProduct(  @PathVariable(name="id") long id ){
		
		Product p;
		 
		 try {
			   p =  this.productService.getProductRepository().findById(id).get();
			   // 2 fill the entity
				 
			   this.productService.getProductRepository().delete(p);
			   
			   return ResponseEntity.status(404).body( new GeneralResponse(true, "product deleted successfully." ) );
				 
		 }catch(Exception e) {
			 return ResponseEntity.status(404).body( new GeneralResponse(false, "product not found" ) );
		 } 

	}
	
	
	
	
	// OneToMany
	
	// ManyToMany
	
	
	
}
