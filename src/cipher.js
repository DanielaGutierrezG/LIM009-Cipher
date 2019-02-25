window.cipher = {
  encode: () => {
    let palabra='';
    let desplazamiento;
    let nuevoNumero;
    let nuevaPalabra;
    let ascii;
    let numFormula;
    let asciiNumero;

    for(let i = 0; i < palabra.length; i++){
     ascii = palabra[i].charCodeAt();
     if (65 <= ascii <= 90) {
     (numFormula = (ascii - 65 + desplazamiento) % 26 + 65);
     }
     console.log(nuevaPalabra = String.fromCharCode(numFormula));
    };

  },
  decode: () => {
    /* Acá va tu código */
  }
};
