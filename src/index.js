const btn=document.getElementById('btn');
btn.addEventListener("click",()=>{

  pagina1.style.display="none";
  pagina2.style.display="block";
})

let textoDescifrado;
let desplazamiento;
let textoCifrado;

document.getElementById('btncifrar').addEventListener("click",()=>{
  textoDescifrado=document.getElementById('descifrado').value;
  desplazamiento=parseInt(document.getElementById('number').value);
  resultadoCifrado=cipher.encode(textoDescifrado,desplazamiento);
  document.getElementById('cifrado').value= resultadoCifrado;
})

document.getElementById('btndescifrar').addEventListener("click",()=>{
  textoCifrado=document.getElementById('cifrado').value;
  desplazamiento=parseInt(document.getElementById('number').value);
  resultadoDescifrado=cipher.decode(textoCifrado,desplazamiento);
  document.getElementById('descifrado').value=resultadoDescifrado;

})

window.cipher = {
  encode: (textoDescifrado,desplazamiento) => {
   let ascii;
   let nuevoResultCifrado;
   let resultadoCifrado=" ";

    for(let i = 0 ; i < textoDescifrado.length ; i++){
      asciiDescifrado =textoDescifrado[i].charCodeAt();
     if( 65 <= asciiDescifrado <= 90 ){
      nuevoResultadoCifrado = String.fromCharCode((asciiDescifrado - 65 + desplazamiento) % 26 + 65);
     console.log(resultadoCifrado += nuevoResultadoCifrado);
      }
    }
    return resultadoCifrado;
  },

  decode: (textoCifrado,desplazamiento) => {
    /* Acá va tu código */
    let nuevoNumero;
    let nuevoResultadoDescifrado;
    let nuevoNumeroCifrado;
    let asciiCifrado;
    let resultadoDescifrado=" ";

   for(let i = 0 ; i < textoCifrado.length ; i++){
     asciiCifrado=textoCifrado[i].charCodeAt();
       if( 65 <= asciiCifrado<=90){
         nuevoNumero=(asciiCifrado-65-desplazamiento);
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
