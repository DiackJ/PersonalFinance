package pf_backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pf_backend.DTO.ReturnUsersDTO;
import pf_backend.DTO.UsersDTO;
import pf_backend.Service.UsersService;

@RestController
//@RequestMapping("/api/v1")
public class UsersController {
    @Autowired
    private UsersService usersService;

//    @GetMapping("/api/v1/test")
//    public ResponseEntity<String> test() {
//        return ResponseEntity
//                .status(HttpStatus.OK)
//                .body("yay!");
//    }

    @PostMapping("/auth/sign-up")
    public ResponseEntity<ReturnUsersDTO> userSignUp(@RequestBody UsersDTO dto) {
        ReturnUsersDTO user = usersService.registerUser(dto);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(user);
    }
}
