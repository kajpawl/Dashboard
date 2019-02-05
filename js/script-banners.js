'use strict';

var showAddBannersModal = document.getElementById('add-banner-button');
	// var showAddBannersModal = document.querySelector('.add-banner-button');     --- ZWRACA TYLKO 1      /      "querySelectorAll" - is not a function
  // var showAddBannersModal = document.getElementsByClassName('add-banner-button');      - is not a function
showAddBannersModal.addEventListener('click', function() {openModal('#modal-add-banners')});

document.getElementById('add-banner-button-2').addEventListener('click', function() {openModal('#modal-add-banners')});
