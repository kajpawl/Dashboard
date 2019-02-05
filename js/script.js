'use strict';

// MOBILE: Toggle dropdown menu

function toggleMenu(visible) {
  document.querySelector('.side-menu').classList.toggle('show', visible)
}

document.querySelector('.dropdown-button').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});


// MODALS: Close modals

function closeModal() {
  document.getElementById('overlay').classList.remove('show')
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})

document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})


// MODALS: Show modals

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show')
  })
  document.querySelector('#overlay').classList.add('show')
  document.querySelector(modal).classList.add('show')
}


// MODALS: Link and show exact modals

var showLoginModal = document.getElementById('login-button');
var showQuitModal = document.getElementById('quit-button');


showLoginModal.addEventListener('click', function() {openModal('#modal-login')});
showQuitModal.addEventListener('click', function() {openModal('#modal-quit')});
