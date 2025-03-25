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

import com.example.demo.models.Jobs;
import com.example.demo.service.JobsService;

@RestController
@RequestMapping("/api/jobs")
public class JobsController {
	
	@Autowired
	private JobsService jobsService;
	
	@PostMapping
	public Jobs createJob(@RequestBody Jobs job) {
		return jobsService.addJob(job);
	}
	
	@GetMapping
	public List<Jobs> getAllJobs() {
		return jobsService.getAllJobs();
	}
	
	@GetMapping("/{id}")
	public Optional<Jobs> getJobById(@PathVariable Long id) {
		return jobsService.getJobById(id);
	}
	
	@PutMapping("/{id}")
	public Jobs updateJob(@PathVariable Long id, @RequestBody Jobs job) {
		return jobsService.updateJob(id, job);
	}
	
	@DeleteMapping("/{id}")
	public void deleteJob(@PathVariable Long id) {
		 jobsService.deleteJob(id);
	}
}
