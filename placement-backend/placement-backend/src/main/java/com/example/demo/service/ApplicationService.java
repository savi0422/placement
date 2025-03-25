package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.models.Application;
import com.example.demo.repository.ApplicationRepository;

@Service
public class ApplicationService {
	
	@Autowired
	private ApplicationRepository applicationRepository;
	
	public List<Application> getAllApplications() {
		return applicationRepository.findAll();
	}
	
	public Optional<Application> getApplicationById(Long id) {
		return applicationRepository.findById(id);
	}
	
	public Application addApplication(Application application) {
		return applicationRepository.save(application);
	}
	
	public Application updateApplication(Long id, Application updateApplication) {
		if (applicationRepository.existsById(id)) {
			updateApplication.setId(id);
			return applicationRepository.save(updateApplication);
		}
		return null;
	}
	
	public void deleteApplication(@PathVariable Long id) {
		applicationRepository.deleteById(id);
	}
	
}
