package pf_backend.Entity;

import jakarta.persistence.*;
import lombok.Data;
import pf_backend.Enum.ThemeColors;

import java.util.List;
import java.util.UUID;

@Entity
@Data
public class Budget {
    @Id
    private UUID id;
    private String budgetTitle;
    private ThemeColors themeColor;
    private double maxSpend;
    private double spent;
    @Transient
    private List<Transaction> categorizedTransactions;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;
}
