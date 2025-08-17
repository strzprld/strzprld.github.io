// Pobranie przycisku do przełączania trybu
const toggleBtn = document.getElementById("darkToggle");

// Funkcja ustawiająca tryb: "dark" lub "light" z lekkim efektem przejścia
function setTheme(mode) {
    const isDark = mode === "dark";

    // Dodajemy klasę przejściową na chwilę dla efektu fade
    document.body.classList.add("theme-transition");
    setTimeout(() => {
        document.body.classList.toggle("dark-mode", isDark);
        document.body.classList.remove("theme-transition");
    }, 100); // 100ms opóźnienia dla płynności

    if (toggleBtn) {
        toggleBtn.textContent = isDark ? "☀️" : "🌙"; // ikona do zmiany trybu
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Inicjalizacja motywu na podstawie zapisanych preferencji lub systemu
(function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
    }
})();

// Obsługa kliknięcia przycisku przełączania trybu
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        setTheme(document.body.classList.contains("dark-mode") ? "light" : "dark");
    });
}