let btnMode = document.querySelector(".mode-btn");
if (
    localStorage.theme === "dark" || 
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    btnMode.innerHTML = "Light Mode";
  } else {
    document.documentElement.classList.remove("dark");
    btnMode.innerHTML = "Dark Mode";
  }

  btnMode.addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark")) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      btnMode.innerHTML = "Dark Mode";
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      btnMode.innerHTML = "Light Mode";
    }
  });