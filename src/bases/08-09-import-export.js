

//import and export, function of Arrays 

import { heroes } from '../data/heroes';

// console.log( heroes );

export const getHeroesById = ( id ) => {
    return heroes.find( value => value.id === id);
}

export const getHeroesByOwner = ( owner ) => heroes.filter( value => value.owner === owner);


console.log( getHeroesById(2) );
console.log( getHeroesByOwner( 'Marvel' ) );
console.log( getHeroesByOwner( 'DC' ) );