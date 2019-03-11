
 const pagina1 = document.getElementById("pagina1");
 const pagina2 =document.getElementById("pagina2");

 pagina2.style.display="none";
const btn=document.getElementById('btn');
btn.addEventListener("click",()=>{

  pagina1.style.display="none";
  pagina2.style.display="block";
})

let desplazamiento;
let textoCifrado ;
let textoDescifrar;
let textoDescifrado;
let textoCifrar;


document.getElementById('btncifrar').addEventListener("click",()=>{
  textoCifrar=document.getElementById('descifrado').value;
  desplazamiento=parseInt(document.getElementById('number').value);
  textoCifrado=cipher.encode(textoCifrar,desplazamiento);
  document.getElementById('cifrado').value= textoCifrado;
})

document.getElementById('btndescifrar').addEventListener("click",()=>{
  textoDescifrar=document.getElementById('cifrado').value;
  desplazamiento=parseInt(document.getElementById('number').value);
  textoDescifrado=cipher.decode(textoDescifrar,desplazamiento);
  document.getElementById('descifrado').value=textoDescifrado;

})
