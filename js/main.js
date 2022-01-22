let searchbtn = document.getElementById('id-search');
let removebtn = document.getElementById('id-remove-search');
let modalbox = document.getElementById('id-search-box');

searchbtn.addEventListener('click', function() {
  modalbox.classList.add('show');
});

removebtn.addEventListener('click', function() {
  modalbox.classList.remove('show');
});


// users

let usersbtn = document.getElementById('id-user');
let xbtn = document.getElementById('id-x');
let usersbox = document.getElementById('id-login');


usersbtn.addEventListener('click', function() {
  usersbox.classList.add('open');
});

xbtn.addEventListener('click', function() {
  usersbox.classList.remove('open');
});

// product

let productbtn = document.getElementById('id-show');
let productxbtn = document.getElementById('id-xproduct');
let productbox = document.getElementById('id-product');


productbtn.addEventListener('click', function() {
  productbox.classList.add('opens');
});

productxbtn.addEventListener('click', function() {
  productbox.classList.remove('opens');
});

// product

let msgidbtn = document.getElementById('id-message');
let msgxbtn = document.getElementById('id-messagex');
let msgbox = document.getElementById('id-msgbox');


msgidbtn.addEventListener('click', function() {
  msgbox.classList.add('on');
});

msgxbtn.addEventListener('click', function() {
  msgbox.classList.remove('on');
});


