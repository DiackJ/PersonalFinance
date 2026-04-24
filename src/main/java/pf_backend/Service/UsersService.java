package pf_backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pf_backend.DTO.ReturnUsersDTO;
import pf_backend.DTO.UsersDTO;
import pf_backend.Entity.Users;
import pf_backend.Repository.UsersRepository;

import java.util.Date;

@Service
public class UsersService {
    @Autowired
    private UsersRepository userRepo;
    @Autowired
    private PasswordEncoder encoder;

    public ReturnUsersDTO registerUser(UsersDTO dto) {
        Users user = new Users();

        user.setEmail(dto.getEmail());
        user.setPasswordHash(encoder.encode(dto.getPasswordHash()));
        user.setJoinDate(new Date());

        userRepo.save(user);

        return new ReturnUsersDTO(
                user.getId(),
                user.getEmail(),
                user.getJoinDate()
        );
    }
}
