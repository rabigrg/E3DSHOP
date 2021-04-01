package com.project.E3DSHOP.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.E3DSHOP.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

}
