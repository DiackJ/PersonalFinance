package pf_backend.Enum;

public enum Categories {
    DINING_OUT("Dining out"),
    GENERAL("General"),
    GROCERIES("Groceries"),
    ENTERTAINMENT("Entertainment"),
    TRANSPORTATION("Transportation"),
    LIFESTYLE("lifestyle"),
    PERSONAL_CARE("Personal Care"),
    EDUCATION("Education"),
    SHOPPING("Shopping"),
    WORK("Work");

    private final String label;

    Categories(String label) {
        this.label = label;
    }
}
