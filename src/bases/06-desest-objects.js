

//Desestructuración de Objects in JS 
//Asignación Desestructurante in JS 

const person = {
    name: 'Tony',
    age: 45,
    key: 'Iroman'
};

const { name, age, key } = person;
console.log(name);
console.log(age);
console.log(key);


const usContexto  = ( {name, key, age, range = 'Capitan'} ) => {
    //console.log(name, age, range);
    return  {
        namekey: key,
        years: age,
        latlgn: {
            lat: 34.5566,
            lgn: 56.66666
        }
    }
}

const { namekey, years, latlgn: { lat, lgn } } = usContexto( person );
console.log(namekey, years, lat, lgn);