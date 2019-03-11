window.cipher = {
  encode: (textoCifrar,desplazamiento) => {
   let asciiTextoCifrar;
   let textoCifrado ="";


    for(let i = 0 ; i < textoCifrar.length ; i++){

      asciiTextoCifrar =textoCifrar[i].charCodeAt();

     if( 65 <= asciiTextoCifrar <= 90 ){
      textoCifrado += String.fromCharCode((asciiTextoCifrar - 65 + desplazamiento) % 26 + 65);
    }else if( 97 <= asciiTextoCifrar <= 122 ){
    textoCifrado += String.fromCharCode((asciiTextoCifrar - 97 + desplazamiento) % 26 + 97);
    }
  }

  return textoCifrado;

},


  decode: (textoDescifrar,desplazamiento) => {
    let asciiTextoDescifrar;
    let textoDescifrado="";

    for(let i = 0 ; i < textoDescifrar.length ; i++){

      asciiTextoDescifrar =textoDescifrar[i].charCodeAt();

     if( 65 <= asciiTextoDescifrar <= 90 ){
      textoDescifrado += String.fromCharCode((asciiTextoDescifrar + 65 - desplazamiento) % 26 + 65);
      }else if( 97 <= asciiTextoDescifrar <= 122 ){
      textoDescifrado += String.fromCharCode((asciiTextoDescifrar + 33 - desplazamiento) % 26 + 97);
      }
}
    return textoDescifrado;
  }
};