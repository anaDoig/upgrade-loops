/* Iteración 1 */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
products.forEach(function (element) {
    if(element.includes('Camiseta')) {
        console.log(element);
    }
});

console.log('-----------');

/* Iteración 2 */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for (let key in alumns) {
    if((alumns[key].T1 === true && alumns[key].T2 === true) ||
        (alumns[key].T2 === true && alumns[key].T3) === true ||
        (alumns[key].T1 === true && alumns[key].T3) === true ) {
            console.log(`${alumns[key].name} está aprobado`);
            alumns[key].isApproved = true;
        } else {
            console.log(`${alumns[key].name} está suspendido`);
            alumns[key].isApproved = false;
        }
}

console.log('-----------');

/* Iteración 3 */
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let value of placesToTravel) {
    console.log(value);
};

console.log('-----------');

/* Iteración 4 */
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

console.log('-----------');

for (key in alien) {
    console.log(alien[key]);
}

console.log('-----------');

/* Iteración 5 */
const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

for (let i = 0; i < placesToTravel2.length; i++) {
    console.log(placesToTravel2[i]);
    if (placesToTravel2[i].id === 11 || placesToTravel2[i].id === 40) {
        placesToTravel2.splice(i, i);
    }

};

console.log('-----------');

/* Iteración 6 */
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

for (value of toys) {
    console.log(value.name);
    if (value.name.includes('gato')) {
        toys.splice(toys.indexOf(value), toys.indexOf(value));
    }
};