//MAIL
//1. Creare una variabile per andarci a prendere il div #esito-mail dall'html
const esitoMailElement = document.getElementById('esito-mail');
console.log(esitoMailElement);
//2. Creare un array e registrare delle mail
let mailPresenti = ['IntesaSanPaolo', 'BurgerKing', 'Boolean', 'Linkedin', 'Stradivarius', 'Amazon'];
console.log(mailPresenti);
//3. Chiedere all'utente che mail vuole cercare
let mailDaCercare = prompt('Desideri cercare una mail? Quale sarebbe il mittente?');
console.log('Utente X vuole cercare le mail da parte di questo mittente: ',  mailDaCercare);
//4. Controllare se le mail del mittete desiderato ci siano
//5. Stampare la risposta nel div #esito-mail del file html
if(mailDaCercare === mailPresenti[0]){
    // console.log('la tua mail è presente.')
    esitoMailElement.innerHTML = 'la tua mail è presente'  
} else if(mailDaCercare === mailPresenti[1]){
    // console.log('la tua mail è presente.')
    esitoMailElement.innerHTML = 'la tua mail è presente'
} else if(mailDaCercare === mailPresenti[2]){
    // console.log('la tua mail è presente.')
    esitoMailElement.innerHTML = 'la tua mail è presente'
} else if(mailDaCercare === mailPresenti[3]){
    // console.log('la tua mail è presente.')
    esitoMailElement.innerHTML = 'la tua mail è presente'
} else if(mailDaCercare === mailPresenti[4]){
    // console.log('la tua mail è presente.')
    esitoMailElement.innerHTML = 'la tua mail è presente'
} else if(mailDaCercare === mailPresenti[5]){
    // console.log('la tua mail è presente.')
    esitoMailElement.innerHTML = 'la tua mail è presente'
} else {
    // console.log('La mail ricercata non è presente')
    esitoMailElement.innerHTML = 'la tua mail non è presente'
}  