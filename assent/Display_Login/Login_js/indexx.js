const form = document.querySelector('.form');
const button = document.querySelector('.button');

button.addEventListener('click', function(e){
    e.preventDefault();
    
    const login = document.querySelector('.login').value;
    const pa = document.querySelector('.pa').value;

    alert(login);
});