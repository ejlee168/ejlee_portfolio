const button = document.getElementById('light-dark-toggle');

if (currentTheme == 'dark') {
  document.body.classList.add('dark-mode');
  button.src = '/assets/sun.svg';
} else {
  document.body.classList.remove('dark-mode');
  button.src = '/assets/moon.svg';
}
