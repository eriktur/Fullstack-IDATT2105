package edu.ntnu.idatt2105.repo;


import edu.ntnu.idatt2105.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}