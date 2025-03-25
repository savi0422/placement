package com.example.demo.repository;

import com.example.demo.models.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface JobsRepository extends JpaRepository<Jobs, Long>{
}
