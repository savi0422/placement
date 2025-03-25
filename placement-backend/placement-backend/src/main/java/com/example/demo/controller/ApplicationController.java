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

import com.example.demo.models.Application;
import com.example.demo.service.ApplicationService;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {
	
	@Autowired
	private ApplicationService applicationService;
	
	@PostMapping
	public Application createApplication(@RequestBody Application application) {
		return applicationService.addApplication(application);
	}
	
	@GetMapping
	public List<Application> getAllApplications() {
		return applicationService.getAllApplications();
	}
	
	@GetMapping("/{id}")
	public Optional<Application> getAllApplicationById(Long id) {
		return applicationService.getApplicationById(id);
	}
	
	@PutMapping("/{id}")
	public Application updateApplication(@PathVariable Long id, @RequestBody Application application) {
		return applicationService.updateApplication(id, application);
	}
	
	@DeleteMapping("/{id}")
	public void deleteApplication(@PathVariable Long id) {
		 applicationService.deleteApplication(id);
	}
}
