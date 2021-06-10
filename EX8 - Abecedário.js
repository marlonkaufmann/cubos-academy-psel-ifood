function solucao(letra, palavras) {


 let perdedores = "0" 

  for (let fruta of palavras ){
   
   if(fruta[0] !== letra) {
      perdedores++      
     }
     
  } 
  console.log(perdedores)
}