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

// xbtn.addEventListener('click', function() {
//   usersbox.classList.add('off');
// });