

//Functions in JS 

// const saludar = function( name ) {
//     return `Hello, ${name}`;
// }

// const saludar2 = ( name ) => {
//     return `Hello, ${name}`;
// }

const saludar2 = ( name ) => `Hello, ${name}`;
const saludar3 = (  ) => `Hello, Mundo`;


const getUser = () => ({
        uid: 'ABCDE',
        username: 'El_papi1502'
    }) ;





console.log( saludar2( 'fernando' ));
console.log( saludar3( ));
console.log( getUser( ));

//Homework 
// function getUserActive( name ){
//     return {
//         uuid: 'ABCD12345',
//         username: name
//     };
// }

const getUserActive = ( name ) => ({
        uuid: 'ABCD12345',
        username: name
    });
     


const userActive = getUserActive( 'Fernando' );
console.log(userActive);