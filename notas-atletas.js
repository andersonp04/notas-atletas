
class mediasDosAtletas{
  
  constructor(Atletas){
    this.Atletas=Atletas;
  }
//................................................................
  ordenarNotas() {
  this.Atletas.forEach(function(atleta){
    
    atleta.notas=atleta.notas.sort(function(a,b){
      return a -b;
    });
    console.log("Atleta: " + Atletas.nome,"Atleta:"+ Atletas.notas)
  });
}
//............................................................
  descartaMenornEMaiorNota( ) {

this.Atletas.forEach(function(atleta){
  atleta.notas=atleta.notas.sort(function (a,b){
    return a-b;
  });

  atleta.notas=atleta.notas.slice(1, 6);
  console.log("Atleta"+atleta.nome+"Notas descatada"+atleta.notas)
});
}
//......................................................................

somaDasNotas() {

  let soma=0
  this.Atletas.notas.forEach(function(atleta){
    console.log(atletas.nome, atleta.notas)
    soma=soma +atleta
    
  })
  return soma / this.atletas.notas.length
  
}
//..........................................



}


let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
]

