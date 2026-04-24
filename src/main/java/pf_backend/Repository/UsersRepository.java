package pf_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pf_backend.Entity.Users;

import java.util.Optional;
import java.util.UUID;

public interface UsersRepository extends JpaRepository<Users, UUID> {
    Optional<Users> findByEmail(String email);
}
