function solucao(obj) {
	
  let acesso = ""
  let entrada = ""

  if (obj.temIngresso === true) {

    if (obj.idade < obj.censura) {

      
      if (obj.estaComPais === true) {
        entrada = "ok"

      } else {
        console.log ("ACESSO NEGADO")
        acesso = "NEGADO"
      }
    } else {
      entrada = "ok"

    }
  } else {
    console.log ("ACESSO NEGADO")
    acesso = "NEGADO"
  }

  let entradaMeia = ""
  let entradaInteira = ""

 if (entrada === "ok") {
   if (obj.temCarteirinha === true) {
      console.log("MEIA")
      entradaMeia = "SIM"
    } else {
      entradaMeia = "NAO"
    }    

  } else {
     entradaMeia = "NAO"
  }
 
  if (acesso === "") {
    
        if (entradaMeia === "NAO") {
            if (obj.idade < 18) {
            console.log ("MEIA")
            entradaMeia = "SIM"
            } else {
                console.log ("INTEIRA")
            }
        } else {
           
          entradaMeia = "NAO"
        }
    } 

}