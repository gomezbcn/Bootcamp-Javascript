
// Listado Compra


const carrito = [


    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

   
   for (i = 0; i < carrito.length; i++) {
    imprimir (carrito[i])
   }

   function imprimir(producto) {
    
    console.log("ID: " + carrito[i].id);
    console.log("Nombre Producto: " + carrito[i].name );
    console.log("Precio: " + carrito[i].price+ " €");
    console.log("Cuantos Productos: " + carrito[i].count);
    console.log("Es el Producto premium? " + carrito[i].premium);

}



// Eliminar ID

const carritos = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },

    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

   
   for (i = 0; i < carritos.length; i++) {
    eliminar (carritos[i])
   }

   function eliminar(producto) {
    
    console.log("ID: " + carritos[i].id);
    console.log("Nombre Producto: " + carritos[i].name );
    console.log("Precio: " + carritos[i].price+ " €");
    console.log("Cuantos Productos: " + carritos[i].count);
    console.log("Es el Producto premium? " + carritos[i].premium);

}


// Calcular total de la compra




var total = 0;
for (producto of carrito) 


{
 total += carrito[1].price * carrito[1].count;


}

console.log("El Total del Carrito es: " + total); 

// Filtrar Premium


var prime1 = [];




for (i = 0; i < carrito.length; i++) {
    if (carrito[i].premium == true) {
        prime1.push(carrito[i]);
    };

}

   console.log(prime1)

   // Tabla del Carrito en archivo index.html


   // Aplicar un descuento del 5% si la compra es mayor de 50 €

   var total = 0;
   for (producto of carrito) 
   
   
   {
    total += carrito[1].price * carrito[1].count;
}
   if (total > 50) total  +=  -(total * 0.05);
   
   
   console.log( "El total de la compra con el descuento ha sido " + total)