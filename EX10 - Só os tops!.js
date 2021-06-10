function solucao(produtos) {
	
  let topLinha  = {
  totalT : 0,
  percentual : 0
  }
 
 let intervaloSoma = 0

 for (let item of produtos) {
   if (item.preco > 10000 ) {
    intervaloSoma = item.preco
    topLinha.totalT += intervaloSoma
    intervaloSoma = 0
    
   }
  
  } 
  
  let intervaloTotalProdutos = 0
  
  let totalProdutos = 0 

 for (let item of produtos) {
   if (item.preco >=0 ) {
    intervaloTotalProdutos = item.preco
    totalProdutos += intervaloTotalProdutos
    intervaloTotalProdutos = 0
    
   }
  
  }

  
  let percUm = topLinha.totalT / totalProdutos
  
  let topDeLinha  = {
  totalTop : topLinha.totalT,
  percentual : percUm
  }

  console.log (topDeLinha) 
 
    
    
    
}