function copyEmail() {
  const popup = document.getElementById('copied-popup');
}

function toggleTheme() {
  new Audio("assets/toggle_sound.mp3").play();
  if (document.body.classList.contains('dark-mode')) {
    document.getElementById('light-dark-toggle').src="assets/sun.svg";
  } else {
    document.getElementById('light-dark-toggle').src="assets/moon.svg";
  }
  document.body.classList.toggle('dark-mode');
  

}