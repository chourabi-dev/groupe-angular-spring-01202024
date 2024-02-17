package com.ttc.spring.entites;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="purshases")
public class Purshase {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // ID AUTOINCREMENT
	private long id; // LONGINT
	
	@ManyToOne
	private Client client;
	
	@ManyToOne
	private Product product;
	
	
	
	// ...
	
	private LocalDateTime date = LocalDateTime.now();
}
