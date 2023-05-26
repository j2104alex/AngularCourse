export interface Product {
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
    taxPercent: number;
    products: Product[];
  }
  
  /* Cuando son mas de tres parametros se recomienda manejar un objeto, por ejemplo
  en lugar de poner tax y cada producto entonces se creo el objeto
  options */
  
  /**Puede devolver un number[] pero eso significa que puede devolver muchos mas valores
   * como solo devuelve una tupla (1 o 2 valores) puedo colocar que retorna un
   * [number,number]
   */
  /* function taxCalculation(options: TaxCalculationOptions): [number,number] { */
  
  export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    
      const { taxPercent, products }= options;
      let total = 0;
  
    products.forEach(({ price }) => {
      total += price;
    });
    return [total, total * taxPercent];
  }
  
  const shoppingCart = [phone, tablet];
  const taxPercent = 0.15;
  
  const [total, tax] = taxCalculation({
    products: shoppingCart,
    taxPercent,
  });
  
  console.log("Total: ", total);
  console.log("Tax: ", tax);
