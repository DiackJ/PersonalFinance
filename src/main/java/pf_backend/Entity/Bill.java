package pf_backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
public class Bill {
    @Id
    private UUID id;
    private String billTitle;
    private double amountDue;
    private String category;
    private boolean isPaid;
    private String frequency;
    private int date;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;
}
