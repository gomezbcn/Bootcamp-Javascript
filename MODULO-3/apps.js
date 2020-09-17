
const product = { count: 3, price: 12.55, type: "alimentacion"};




let total;

if(product.count > 0) {


  total =  product.count*product.price



} else {
    total = 0

}

;

  console.log(total);


  let Tipoiva = 0.21;

  switch(product.type) {
      case "alimentacion":
        Tipoiva = 0.1; break;
    
        case"libro":
        Tipoiva = 0.04; break;

    }
   

  

console.log(Tipoiva);

const IVA = total*Tipoiva;

console.log(total+IVA);




