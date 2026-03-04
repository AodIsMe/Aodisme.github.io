//elements
const html = document.documentElement;
const toggleButton = document.getElementById("themeToggle");
const settingsIcon = document.getElementById("settings-icon");
const settingsMenu = document.getElementById("settings-menu");

//navbar collapse into menu logic
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}



// adding theme toggle
toggleButton.addEventListener("click", (e) => {
  e.stopPropagation();

  if (html.dataset.theme === "light") {
    html.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  } else {
    html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }

  settingsMenu.hidden= true;
});

//adding load local save on refresh
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  html.setAttribute("data-theme", "light");
}

//-------settings menu open/close -------
settingsIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  settingsMenu.hidden = !settingsMenu.hidden;
});

// close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".settings")) {
    settingsMenu.hidden = true;
  }
});

// close menu on escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") settingsMenu.hidden = true;
});
