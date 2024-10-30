const themeButton = document.querySelector(".theme");

themeButton.onclick = () => {
    document.body.classList.toggle("dark-theme");
    themeButton.textContent = document.body.classList.contains("dark-theme")
        ? "Switch to Light Theme"
        : "Switch to Dark Theme";
};

