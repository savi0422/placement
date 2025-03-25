package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Company;
import com.example.demo.service.CompanyService;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;
	
	@PostMapping
	public Company createCompany(@RequestBody Company company) {
		return companyService.addCompany(company);
	}
	
	@GetMapping
	public List<Company> getAllCompanies() {
		return companyService.getAllCompanies();
	}
	
	@GetMapping("/{id}")
	public Optional<Company> getCompanyById(@PathVariable Long id) {
		return companyService.getCompanyById(id);
	}
	
	@PutMapping("/{id}")
	public Company updateCompany(@PathVariable Long id, @RequestBody Company company) {
		return companyService.updateCompany(id, company);
	}
	
	@DeleteMapping
	public void deleteCompany(@PathVariable Long id) {
		 companyService.deleteCompany(id);
	}
	
	
}
