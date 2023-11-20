

//Desestructuración de Arrays in JS 
//Asignación Desestructurante in JS 

const persons = [ 'Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = persons;


console.log(persons);
console.log(p1);
console.log(p2); 
console.log(p3);


const returnArray = () => {
    return ['ABC', 123];
}

const [ letters, number ] = returnArray();

console.log(letters);
console.log(number);


//Homework 

const usoState = ( value ) => {
    return [ value, () => { console.log('Hola Mundo')} ];
}

const [ name, setName ] = usoState('Goku');

console.log(name);
setName();