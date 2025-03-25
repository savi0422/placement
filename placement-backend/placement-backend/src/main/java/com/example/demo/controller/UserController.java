package com.example.demo.controller;

import com.example.demo.models.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public User registerUser(@RequestBody User user) {
		return userService.saveUser(user);
	}
	
	@GetMapping("/{email}")
	public Optional<User> getUserByEmail(@PathVariable String email) {
		return userService.getUserByEmail(email);
	}
}
