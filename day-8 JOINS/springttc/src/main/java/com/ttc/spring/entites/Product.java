package com.ttc.spring.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name="products")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // ID AUTOINCREMENT
	private long id; // LONGINT
	
	@Column( name="product_name", nullable=false )
	private String product;
	
	@Column( name="product_price", nullable=false )
	private float price;
	
	@Column( name="product_quantity", nullable=false )
	private int quantity;
	
	 
	
	@ManyToOne()
	@JoinColumn( name="categories_id" )
	@JsonIgnore
	private Categrory category;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getProduct() {
		return product;
	}


	public void setProduct(String product) {
		this.product = product;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public Categrory getCategory() {
		return category;
	}


	public void setCategory(Categrory category) {
		this.category = category;
	}


	public Product() {
		super();
	}
	
	
	

}
