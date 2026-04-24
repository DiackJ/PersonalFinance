package pf_backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
@Data
public class Users {
    @Id
    private UUID id;
    private String email;
    private String passwordHash;
    private Date joinDate;
    private double income;
    private double currentBalance;
    private double expenses;
    @OneToMany(mappedBy = "user")
    private List<Transaction> transactions;
    @OneToMany(mappedBy = "user")
    private List<Budget> budgets;
    @OneToMany(mappedBy = "user")
    private List<Pot> pots;
    @OneToMany(mappedBy = "user")
    private List<Bill> bills;
}
