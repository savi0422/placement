package com.example.demo.models;

import jakarta.persistence.*;


@Entity
@Table(name = "jobs")
public class Jobs {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String tittle;
	private String description;
	private String eligibility;
	
	@ManyToOne
	@JoinColumn(name = "company_id", nullable = false)
	private Company company;
	
	@ManyToOne
	@JoinColumn(name = "application_id")
	private Application application;
	
	public Jobs() {}
	
	public Jobs(String tittle, String description, String eligibility) {
		this.tittle = tittle;
		this.description = description;
		this.eligibility = eligibility;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTittle() {
		return tittle;
	}

	public void setTittle(String tittle) {
		this.tittle = tittle;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEligibility() {
		return eligibility;
	}

	public void setEligibility(String eligibility) {
		this.eligibility = eligibility;
	}
	
	
	
}
