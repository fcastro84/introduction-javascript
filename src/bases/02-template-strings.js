const firstName = 'Fidel';
const lastName = 'Castro Dieguez';

console.log(`${firstName} ${lastName}`);

function getSaludo( name ){
    return 'Hola ' + name;
}

console.log( `Este es un texto: ${getSaludo(firstName + ' ' + lastName)}` );