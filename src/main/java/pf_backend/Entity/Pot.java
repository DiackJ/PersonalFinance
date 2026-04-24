package pf_backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import pf_backend.Enum.ThemeColors;

import java.util.UUID;

@Entity
@Data
public class Pot {
    @Id
    private UUID id;
    private String potTitle;
    private ThemeColors themeColor;
    private double targetAmount;
    private double savedAmount;
    private double percentSaved;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;
}
