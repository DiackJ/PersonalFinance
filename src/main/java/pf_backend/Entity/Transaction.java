package pf_backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import pf_backend.Enum.Categories;

import java.util.Date;
import java.util.UUID;

@Entity
@Data
public class Transaction {
    @Id
    private UUID id;
    private String recipientSender;
    private double amount;
    private Date date;
    private Categories category;
    private boolean isIncome;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;
}
