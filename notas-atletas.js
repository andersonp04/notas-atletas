
class mediasDosAtletas{
  
  constructor(Atletas){
    this.Atletas=Atletas;
  }
//................................................................
  ordenarNotas() {
notas.sort((a, b) => a.notas - b.notas)
      
    //console.log("Atleta: " + Atletas.nome,"Atleta:"+ Atletas.notas)
  };
}
//............................................................
  descartaMenornEMaiorNota() {

this.Atletas.forEach(function(atleta){
  atleta.notas=atleta.notas.sort(function (a,b){
    return a-b;
  });

  atleta.notas=atleta.notas.slice(1, 4);
  //console.log("Atleta"+atleta.nome+"Notas descatada"+atleta.notas)
});
}
//......................................................................

somaDasNotas() {
  this.Atletas.forEach(function(atleta){
    atleta.somaDasNotas=atleta.notas.reduce(function(total,nota){
       return total + nota;
    },0);
    //console.log(atletas.nome, atleta.notas)
  })
  
}

mediaDasNotas() {
this.Atletas.forEach(function(atleta){
  atleta.mediaDasNotas = atleta.somaDasNotas / atleta.notas.length
  //console.log(atleta.nome,atleta.notas)
})
}
//..........................................
};





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
];

let calcularMedia = new mediasDosAtletas(atletas)
calcularMedia.ordenarNotas();
calcularMedia.descartaMenornEMaiorNota();
calcularMedia.somaDasNotas();
calcularMedia.mediaDasNotas()

console.log(calcularMedia.Atletas);