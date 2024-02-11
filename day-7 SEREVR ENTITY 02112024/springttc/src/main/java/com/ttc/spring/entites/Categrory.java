package com.ttc.spring.entites;

import jakarta.persistence.*;



@Entity
@Table( name="categories" )
public class Categrory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // ID AUTOINCREMENT
	private long id;  
	
	@Column( name="category_name", nullable=false )
	private String name;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Categrory(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public Categrory() {
		super();
	}
	
	

}
