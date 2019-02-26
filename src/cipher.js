  window.cipher = {
  encode: (textoDescifrado,desplazamiento) => {

   let ascii;
   let nuevoResultadoCifrado;
   let resultadoCifrado=" ";

    for(let i = 0 ; i < textoDescifrado.length ; i++){
      ascii
 =textoDescifrado[i].charCodeAt();
     if( 65 <= ascii
 <= 90 ){
      nuevoResultadoCifrado = String.fromCharCode((ascii
 - 65 + desplazamiento) % 26 + 65);
     console.log(resultadoCifrado += nuevoResultadoCifrado);
      }
    }
    return resultadoCifrado;
  },

  decode: (textoCifrado,desplazamiento) => {
    let nuevoNumero;
    let nuevoResultadoDescifrado;
    let nuevoNumeroCifrado;
    let ascii;
    let resultadoDescifrado=" ";

   for(let i = 0 ; i < textoCifrado.length ; i++){
     ascii=textoCifrado[i].charCodeAt();
       if( 65 <= ascii<=90){
         nuevoNumero= (ascii-65-desplazamiento);
        }  while (nuevoNumero < 0){
          nuevoNumero=nuevoNumero + 26;
          }
          nuevoNumeroCifrado=nuevoNumero%26+65
          console.log(nuevoResultadoDescifrado=String.fromCharCode(nuevoNumeroCifrado))
          resultadoDescifrado += nuevoResultadoDescifrado;
     }
    return resultadoDescifrado;
  }
}
