class Atleta {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }

    obterMediaValida() {
        let notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        
        let notasComputadas = notasOrdenadas.slice(1, 4);
        
        let soma = notasComputadas.reduce((total, atual) => total + atual, 0);
        
        return (soma / notasComputadas.length).toFixed(2);
    }

    exibirResultado() {
        console.log(`Atleta: ${this.nome}`);
        console.log(`Notas Obtidas: ${this.notas.join(',')}`);
        console.log(`Média Válida: ${this.obterMediaValida()}`);
        console.log(""); 
    }
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
];

atletas.forEach(dadosAtleta => {
    let atleta = new Atleta(dadosAtleta.nome, dadosAtleta.notas);
    atleta.exibirResultado();
});
