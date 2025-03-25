package com.example.demo.repository;

import com.example.demo.models.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);

	Optional<User> findByUsername(String username);
	Optional<User> findByemail(String email);
}
