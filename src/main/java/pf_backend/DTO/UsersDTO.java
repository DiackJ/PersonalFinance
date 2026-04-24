package pf_backend.DTO;

import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
public class UsersDTO {
    private UUID id;
    private String email;
    private String passwordHash;
    private Date joinDate;
    private double income;
    private double currentBalance;
    private double expenses;

    // private List<TransactionDTO> transactions;
    // private List<BudgetDTO> budgets;
    // private List<PotDTO> pots;
    // private List<BillDTO> bills;
}
