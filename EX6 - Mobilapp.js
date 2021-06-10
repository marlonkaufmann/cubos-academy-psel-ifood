function solucao(tempo, distancia) {
	

    let viagemCurta = 6*100
    let viagemMedia = ((1*tempo)+(0.50*distancia))*100
    let viagemLongaUm = (2*distancia)*100
    let viagemLongaDois = (1.5*distancia)*100
    
    if (tempo<5) {
      console.log(viagemCurta)
    } else if (tempo >= 5 && tempo <= 60) {
      console.log(viagemMedia)
    } else if (tempo > 60 && distancia < 100) {
      console.log(viagemLongaUm)
    } else if (tempo > 60 && distancia >= 100) {
      console.log(viagemLongaDois)
    }
    

}