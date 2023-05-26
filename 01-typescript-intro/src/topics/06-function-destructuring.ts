interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "Ipad Air",
  price: 250.0,
};

//Objeto que contiene las opciones para el calculo del impuesto
interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

/* Cuando son mas de tres parametros se recomienda manejar un objeto, por ejemplo
en lugar de poner tax y cada producto entonces se creo el objeto
options */
function taxCalculation(options: TaxCalculationOptions): number[] {
  let total = 0;

  options.products.forEach((product) => {
    total += product.price;
  });
  return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
  products: shoppingCart,
  tax
});

console.log('Total: ',result[0]);
console.log('Tax: ',result[1]);

export {};
