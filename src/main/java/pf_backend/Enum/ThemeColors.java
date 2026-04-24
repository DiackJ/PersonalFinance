package pf_backend.Enum;

public enum ThemeColors {
    RED("Red"),
    GREEN("Green"),
    YELLOW("Yellow"),
    CYAN("Cyan"),
    NAVY("Navy"),
    PURPLE("Purple"),
    TURQUOISE("Turquoise"),
    BROWN("Brown"),
    MAGENTA("Magenta"),
    BLUE("Blue"),
    NAVY_GREY("Navy Grey"),
    ARMY_GREEN("Army Green"),
    PINK("Pink"),
    GOLD("Gold"),
    ORANGE("Orange");

    private final String label;

    ThemeColors(String label) {
        this.label = label;
    }
}
