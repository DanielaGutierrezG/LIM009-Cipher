window.cipher = {
  encode: (textoDescifrado,desplazamiento) => {
   let nuevoResultadoCifrado;
   let asciiDescifrado;
   let resultadoCifrado = "";


    for(let i = 0 ; i < textoDescifrado.length ; i++){
      asciiDescifrado =textoDescifrado[i].charCodeAt();
     //if( 65 <= asciiDescifrado <= 90 ){
      nuevoResultadoCifrado = String.fromCharCode((asciiDescifrado - 65 + desplazamiento) % 26 + 65);
     resultadoCifrado += nuevoResultadoCifrado;
     // }
    }
    return resultadoCifrado;
  },

  decode: (textoCifrado,desplazamiento) => {
    let nuevoNumero;
    let nuevoResultadoDescifrado;
    let nuevoNumeroCifrado;
    let asciiCifrado;
    let resultadoDescifrado=" ";

   for(let i = 0 ; i < textoCifrado.length ; i++){
     asciiCifrado=textoCifrado[i].charCodeAt();
      // if( 65 <= asciiCifrado<=90){
         nuevoNumero=(asciiCifrado-65-desplazamiento);
       // }  
       while (nuevoNumero < 0){
          nuevoNumero=nuevoNumero + 26;
          }
          nuevoNumeroCifrado=nuevoNumero%26+65
          nuevoResultadoDescifrado=String.fromCharCode(nuevoNumeroCifrado)
          resultadoDescifrado += nuevoResultadoDescifrado;
     }
    return resultadoDescifrado;
  }
}
