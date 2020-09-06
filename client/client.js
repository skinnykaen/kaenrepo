'use strict'

console.log("Hello from client");

var sendForm = document.getElementsByClassName('send-form');
var sendButton = document.getElementById('send');


sendForm.addEventListener('submit', (event) =>{
  event.preventDefault();
  console.log("event listener");
});
