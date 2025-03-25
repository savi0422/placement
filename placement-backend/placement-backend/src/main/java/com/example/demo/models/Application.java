package com.example.demo.models;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "applications")
public class Application {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	 @ManyToOne
	    @JoinColumn(name = "student_id") // Matches "student" field in Application
	    private Student student;
	
	@OneToMany(mappedBy = "application", cascade = CascadeType.ALL)
    private List<Jobs> jobs;
	
	private String status;
	
	public Application() {}
	
	public Application(String status, Student student, List<Jobs> jobs) {
		this.status = status;
		this.student = student;
		this.jobs = jobs;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public List<Jobs> getJobs() {
		return jobs;
	}

	public void setJobs(List<Jobs> jobs) {
		this.jobs = jobs;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
	
	
}
