package com.ttc.spring.controllers;

import org.springframework.web.bind.annotation.*;

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
	
	// PUT DELETE
	
	// ResponseEntity
	
	
	
}
