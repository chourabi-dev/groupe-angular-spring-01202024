package com.ttc.spring.entites;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="clients")
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // ID AUTOINCREMENT
	private long id; // LONGINT
	
	@Column( name="client_name", nullable=false )
	private String client;
	 
}
