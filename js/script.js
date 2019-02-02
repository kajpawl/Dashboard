function toggleMenu(visible) {
  document.querySelector('.side-menu').classList.toggle('show', visible)
}

document.querySelector('.dropdown-button').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});