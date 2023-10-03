const formulary = document.querySelector('.form')
const buttonC = document.querySelector('.buttonC');
const buttonV = document.querySelector('.buttonV');

function test(){
//Capturando elementos para manipular no DOM.
    formulary.addEventListener('submit', function(event){
        event.preventDefault();
        
        const login = document.querySelector('.login').value;
        const email = document.querySelector('.email').value;
        const pass =   document.querySelector('.password').value;
        const passConfirm = document.querySelector('.repeatPass').value; 
        
        getData(login, email, pass, passConfirm);
        
    });
}

buttonC.addEventListener('click', function(){
    test();
});
function getData(login, email, pass, passConfirm){
    const addData = [];
    addData.push(login, email, pass, passConfirm);
    console.log(addData);
}

