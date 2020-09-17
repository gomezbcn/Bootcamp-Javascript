const neto = {
    bruto: 30000,
    hijos: 2,
    pagas: 14
  }



let retencion;

if(neto.bruto < 12000) {


  retencion =  neto.bruto*0



} else if (neto.bruto < 24000) {
    retencion =  neto.bruto*0.08

} else if (neto.bruto < 34000) {
    retencion =  neto.bruto*0.16
    

} else if (neto.bruto > 34000) {
    retencion =  neto.bruto*0.3

}

console.log(retencion);
    
let hijos;

if (neto.hijos > 0 ) {hijos = neto.bruto*0.2 }

else {
   hijos = 0

}

console.log(hijos);



anual = neto.bruto+retencion+hijos;

console.log(anual)


console.log(anual/neto.pagas);





