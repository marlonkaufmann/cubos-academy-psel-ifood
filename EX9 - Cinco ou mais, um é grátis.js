function solucao(precos) {

 let contadorProduto = 0
 
 Array.min = function(array) {
    return Math.min.apply(Math, array);
  }

  
    
  let total = 0 

  for (let i=0; i < precos.length; i++) {
      
        if (precos[i] >= 0) {
        total += precos[i]
      }
  }
      
  

 let menorValor = Array.min(precos)
 let totalComDesconto = total - menorValor
 
 for (let valor of precos ) {
 contadorProduto++ 
 }
 if (contadorProduto >= 5) {
  console.log( totalComDesconto )
 } else {
   console.log(total)
 }
    
}
