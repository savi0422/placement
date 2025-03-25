package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.models.Company;
import com.example.demo.repository.CompanyRepository;

@Service
public class CompanyService {
	
	@Autowired
	private CompanyRepository companyRepository;
	
	public List<Company> getAllCompanies() {
		return companyRepository.findAll();
	}
	
	public Optional<Company> getCompanyById(Long id) {
		return companyRepository.findById(id);
	}
	
	public Company addCompany(Company company) {
		return companyRepository.save(company);
	}
	
	public Company updateCompany(Long id, Company updateCompany) {
		if (companyRepository.existsById(id)) {
			updateCompany.setId(id);
			return companyRepository.save(updateCompany);
		}
		return null;
	}
	
	public void deleteCompany(@PathVariable Long id) {
		companyRepository.deleteById(id);
	}
}
