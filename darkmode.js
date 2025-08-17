// Pobranie przycisku do przełączania trybu
const toggleBtn = document.getElementById("darkToggle");

// Funkcja ustawiająca tryb: "dark" lub "light"
function setTheme(mode) {
    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        if (toggleBtn) toggleBtn.textContent = "☀️"; // ikona do przełączenia na jasny
    } else {
        document.body.classList.remove("dark-mode");
        if (toggleBtn) toggleBtn.textContent = "🌙"; // ikona do przełączenia na ciemny
    }
}

// Sprawdzenie zapisanego trybu w localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // Jeśli brak zapisu, użyj preferencji systemowej
    setTheme("dark");
} else {
    setTheme("light");
}

// Obsługa kliknięcia przycisku przełączania trybu
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("dark-mode")) {
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    });
}