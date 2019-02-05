'use strict';

var showAddUrlModal = document.getElementById('add-url-button');
 // var showAddUrlModal = document.getElementsByClassName('add-url-button');      - is not a function
showAddUrlModal.addEventListener('click', function() {openModal('#modal-add-url')});


document.getElementById('add-url-button-2').addEventListener('click', function() {openModal('#modal-add-url')});
