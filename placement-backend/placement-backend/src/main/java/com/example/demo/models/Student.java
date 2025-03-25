package com.example.demo.models;

import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "students")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String skills;
	private String resumeLink;
	
	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Application> applications;
	
	public Student () {}
	
	public Student(String skills, String resumeLink) {
		this.skills = skills;
		this.resumeLink = resumeLink;
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getResumeLink() {
		return resumeLink;
	}
	public void setResumeLink(String resumeLink) {
		this.resumeLink = resumeLink;
	}
	

}
