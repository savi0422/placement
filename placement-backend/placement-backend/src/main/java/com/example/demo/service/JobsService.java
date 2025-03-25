package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.models.Jobs;
import com.example.demo.repository.JobsRepository;

@Service
public class JobsService {
	
	@Autowired
	private JobsRepository jobsRepository;
	
	public List<Jobs> getAllJobs() {
		return jobsRepository.findAll();
	}
	
	public Optional<Jobs> getJobById(Long id) {
		return jobsRepository.findById(id);
	}
	
	public Jobs addJob(Jobs job) {
		return jobsRepository.save(job);
	}
	
	public Jobs updateJob(Long id, Jobs updateJob) {
		if (jobsRepository.existsById(id)) {
			updateJob.setId(id);
			return jobsRepository.save(updateJob);
		}
		return null;
	}
	
	public void deleteJob(Long id) {
		jobsRepository.deleteById(id);
	}
	
}
