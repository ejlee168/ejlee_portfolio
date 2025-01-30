toggle_sound = new Audio('/assets/toggle_sound.mp3');

function toggleTheme() {
  toggle_sound.play();
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    document.getElementById('light-dark-toggle').src = '/assets/sun.svg';
  } else {
    document.getElementById('light-dark-toggle').src = '/assets/moon.svg';
  }
}
