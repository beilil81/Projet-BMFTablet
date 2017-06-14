package com.tablet.bmf.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tablet.bmf.entities.User;
/**
 * 
 * @author BMF
 *  Utilisation de spring data
 */
@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
      
}
