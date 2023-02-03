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
let esito = '';

if(mailDaCercare === mailPresenti[0]){
    // console.log('la tua mail è presente.');
    esito = 'la tua mail è presente';  
} else if(mailDaCercare === mailPresenti[1]){
    // console.log('la tua mail è presente.');
    esito = 'la tua mail è presente';
} else if(mailDaCercare === mailPresenti[2]){
    // console.log('la tua mail è presente.');
    esito = 'la tua mail è presente';
} else if(mailDaCercare === mailPresenti[3]){
    // console.log('la tua mail è presente.');
    esito = 'la tua mail è presente';
} else if(mailDaCercare === mailPresenti[4]){
    // console.log('la tua mail è presente.');
    esito = 'la tua mail è presente';
} else if(mailDaCercare === mailPresenti[5]){
    // console.log('la tua mail è presente.');
    esito = 'la tua mail è presente';
} else {
    // console.log('La mail ricercata non è presente');
    esito = 'la tua mail non è presente';
};  

esitoMailElement.innerHTML = esito;

// DADI
//1. Generiamo un numero random per l'utente (da 1 a 6)
let numeroRandomUtente = Math.floor(Math.random() * 6) + 1;
console.log('Il numero generato random per utente x è :', numeroRandomUtente);
//2. Generiamo un numero random per il computer (da 1 a 6)
let numeroRandomComputer = Math.floor(Math.random() * 6) + 1;
console.log('Il numero generato random per il computer è :', numeroRandomComputer);
//3. Creiamo un if - else per stabilire chi ha vinto
//4. Stampiamo in console il vincitore
if (numeroRandomUtente < numeroRandomComputer){
    console.log('Hai perso!!!');
} else if (numeroRandomUtente > numeroRandomComputer){
    console.log('Hai Vinto!!!');
} else {
    console.log('Pareggio!!!');
}
