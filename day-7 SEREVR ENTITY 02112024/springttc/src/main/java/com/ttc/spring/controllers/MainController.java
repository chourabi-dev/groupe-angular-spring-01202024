package com.ttc.spring.controllers;

import java.time.LocalDateTime;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ttc.spring.dto.LoginModel;

@RestController
@RequestMapping("/app")
public class MainController {
	
	// GET POST PUT DELETE
	// GET => to get data from serevr
	// POST => to send data BODY to the sever
	// PUT  =>
	// DELETE
	
	
	// EXMP
	/* STUDENT
	 * GET /student 
	 * POST /student
	 * PUT /student
	 * DELETE /student
	 * 
	 * GET /get-student 
	 * POST /add-student
	 * POST /update-student
	 * GET /delet-student
	 * 
	 * 
	 * */
	
	
	
	@GetMapping("/hello")
	public String helloWorld() {
		return "hello world";
	}
	
	
	@GetMapping("/somme")
	public int somme( 
			@RequestParam( name="x", required=true ) int x,
			@RequestParam( name="y", required=true ) int y 
			) {
		
		return (x+y);
	}
	
	
	/*
	 * 
	 * GET   // PATH VARIBALE
	 * GET /users/details/5
	 * GET /users/details/  VAR
	 *  
	 * */
	
	
	@GetMapping("/users/details/{test}")
	public String getUserByID(   @PathVariable( name="test" ) String id   ) {
		return "Laoding user N° ".concat(id);
	}
	
	
	
	// POST @RequestBody 
	
	@PostMapping("/login")
	public void login(  @RequestBody LoginModel model  ) {
		String password = model.getPassword();
		String username = model.getUsername();
		
		// DB
		System.out.println(password);
		System.out.println(username);
		
	}
	
	
	@PostMapping("/login-2")
	public LoginModel login2(  @RequestBody LoginModel model  ) {

		return model; 
	}
	
	// PUT DELETE
	
	@PutMapping("/update-something")
	public void update( @RequestBody LoginModel model ) {
		String password = model.getPassword();
		String username = model.getUsername(); 
		System.out.println(password);
		System.out.println(username);
	}
	
	
	
	@DeleteMapping("/delete-something")
	public String update( ) {
		return "Deleted !!!!";
	}


	// ResponseEntity
	
	@GetMapping("/date")
	public ResponseEntity<?> getDate() {
		 
		return ( ResponseEntity.status(404).body( LocalDateTime.now() ) );
	}
	
	
	
	
}
