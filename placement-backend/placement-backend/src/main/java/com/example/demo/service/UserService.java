package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.config.JwtUtil;
import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;


@Service 
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtUtil jwtutil;
    
    public User saveUser(User user) {
    	user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    public boolean checkPassword(String rawPassword, String encodePassword) {
    	return passwordEncoder.matches(rawPassword, encodePassword);
    }
    
    public String getUser(User user) {
    	return jwtutil.generateToken(user.getEmail());
    }

	public String generateToken(User user) {
		// TODO Auto-generated method stub
		return null;
	}
}
