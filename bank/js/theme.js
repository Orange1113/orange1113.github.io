let darkmode = localStorage.getItem("dark");
const themeSwitch = document.getElementById("theme");

const enableDarkMode = () => {
    document.body.classList.add("dark");
    localStorage.setItem("dark", "active");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark");
    localStorage.setItem("dark", null);
}

if (darkmode === "active") enableDarkMode();

themeSwitch.addEventListener("click", function () {
    darkmode = localStorage.getItem("dark");
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
})
