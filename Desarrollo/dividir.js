function dividir (numero1, numero2) {
    
if (numero1 === 0) {
   return "No se puede dividir por 0"   
}

if (numero2 === 0) {
   return "No se puede dividir por 0"
}
   return numero1 / numero2  
 }

 module.exports = dividir 