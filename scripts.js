/* Iteración 1 */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
products.forEach(function (element) {
    if(element.includes('Camiseta')) {
        console.log(element);
    }
})