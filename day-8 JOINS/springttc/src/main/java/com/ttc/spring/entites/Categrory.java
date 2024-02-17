package com.ttc.spring.entites;

import java.util.List;

import jakarta.persistence.*;



@Entity
@Table( name="categories" )
public class Categrory {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // ID AUTOINCREMENT
	private long id;  
	
	@Column( name="category_name", nullable=false )
	private String name;
	
	
	
	@OneToMany( mappedBy="category" )
	private List<Product> products;
	
	
	
	
	
	
	
	
	

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

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
