document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn.querySelector(".theme-toggle__icon");
  const body = document.body;

  function updateIcon(isDark) {
    icon.classList.remove("fa-sun", "fa-moon");
    icon.classList.add(isDark ? "fa-sun" : "fa-moon");
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    updateIcon(true);
  } else {
    updateIcon(false);
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    const isDark = body.classList.contains("dark-theme");
    updateIcon(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
