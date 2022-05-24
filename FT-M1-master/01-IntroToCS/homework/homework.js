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
  var x = num
  let binario = []
  while(x!=0){
    
  }
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}