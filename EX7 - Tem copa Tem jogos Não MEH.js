function solucao(ano) {
	
    resto = ano%4

  if (resto == 0) {
    console.log("JOGOS")
  } else if (resto == 2) {
    console.log("COPA")
  } else if (resto !== 0 && resto !== 2) {
    console.log("MEH")
  }  

}
