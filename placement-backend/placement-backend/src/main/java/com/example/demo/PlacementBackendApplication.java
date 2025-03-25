package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan(basePackages = "com.example.demo")  // Ensures all packages are scanned
public class PlacementBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlacementBackendApplication.class, args);
	}

}
