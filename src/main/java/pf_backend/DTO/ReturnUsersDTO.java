package pf_backend.DTO;

import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
public class ReturnUsersDTO {
    private UUID id;
    private String email;
    private Date joinDate;

    public ReturnUsersDTO(){}

    public ReturnUsersDTO(UUID id, String email, Date joinDate) {
        this.id = id;
        this.email = email;
        this.joinDate = joinDate;
    }
}
