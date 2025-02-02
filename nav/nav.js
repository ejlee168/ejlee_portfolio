toggle_sound = new Audio('/assets/toggle_sound.mp3');

let currentTheme = localStorage.getItem('theme');

if (!currentTheme) {
  localStorage.setItem('theme', 'light');
  currentTheme = 'light';
}

function toggleTheme() {
  toggle_sound.play();
  document.body.classList.toggle('dark-mode');

  const isDarkMode = document.body.classList.contains('dark-mode');

  if (isDarkMode) {
    localStorage.setItem('theme', 'dark');
    document.getElementById('light-dark-toggle').src = '/assets/sun.svg';
  } else {
    document.getElementById('light-dark-toggle').src = '/assets/moon.svg';
    localStorage.setItem('theme', 'light');
  }
}
