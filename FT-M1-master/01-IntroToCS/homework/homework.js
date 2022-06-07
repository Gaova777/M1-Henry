'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0;

  for(var i = 0; i<num.length;i++){
    suma += num[i]*2**(num.length-1-i)
  }
  return suma;

}

function DecimalABinario(num) {
  // tu codigo aca
  var n = num;
    let x = []
    while(n!=0){
        x.unshift(n%2)
        n=Math.floor(n/2);
    }
    return x.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}