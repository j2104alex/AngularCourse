import { Product, taxCalculation } from './06-function-destructuring';

//[] indica que shoppingCart es un arreglo de tipo producto
const shoppingCart: Product[] = [
  {
    description: "Nokia",
    price: 100,
  },
  {
    description: "Ipad",
    price: 150,
  },
];

const [total,taxPercent] = taxCalculation({
    products:shoppingCart,
    taxPercent:0.15
});

console.log('Total',total);
console.log('Tax',taxPercent);