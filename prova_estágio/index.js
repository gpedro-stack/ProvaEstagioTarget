//////  Prova Técnica Estágio Target Sistemas


/* 

Questão 1 - Enunciado: Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? 

*/

/*

let index = 13;
let soma = 0;
let k = 0;

while (k < index) {
    k++;
    soma = soma + k;
}

console.log("Soma:", soma);

*/

// --------------


/* 

Questão 2 -- Basta colocar o número na função de parâmetro! -- Enunciado: Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

*/

/*
let firstStarter = 0;
let secondStarter = 1;
let thirdStarter = 0;
let result = 0;
let i=0;

function fibonacci(num){
    
    while (result <= num) {
        result = firstStarter + secondStarter;
        firstStarter = secondStarter;
        secondStarter = result;
        i++;

        if (num == result){
            console.log("O número existe na sequência!")
            break;
        }

        

    }

}

fibonacci("Número aqui!");*/


// -------------


 /*
 
 Questão 3 -- Basta colocar o número de dias do mês na função de parâmetro! -- Enunciado: Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

Obs: Coloquei o número de faturamento máximo de 2000 e não pude calcular os dias do fim de semana, pois não tive dados de uma API ou algo do tipo,
o que fez com que essa questão ficasse um tanto confusa.

*/



async function getData(){
    try{
        const response = await fetch('./dados.json');

        if(!response.ok){
        }

        const data = await response.json();
        
        //data.forEach(element => console.log(element));

        pegarMenorFaturamento(data);
        pegarMaiorFaturamento(data);
        calculosMedia(data);

    } catch(error) {
        throw new Error("Couldn't get data!");
    }


}

function pegarMenorFaturamento(dado){
    let menorFatura = dado.reduce((total,next) => {
        if (total > next.valor && next.valor != 0) {
            return next.valor
        }
        return total
    },1000000);
    console.log(`Valor com a menor fatura: ${menorFatura}`);
    
}

function pegarMaiorFaturamento(dado){
    let maiorFatura = dado.reduce((prev,next) => {return next.valor > prev ? next.valor : prev},0);
    console.log(`A maior fatura do mês é: ${maiorFatura.toFixed(2)}`);
}

function calculosMedia(dado) {
    let dias = 0;
    let soma = 0;
    let diasSuperados = 0;

    dado.forEach(element => {
        if (element.valor != 0 && dias < 22) {
            soma += element.valor
            dias++;
        }
    })
    let media = soma/dias;

    dado.forEach(element => element.valor > media ? diasSuperados++ : "");
    console.log(`Média do mês: ${media.toFixed(2)}`);
    console.log(`Quantidade de valores que superaram a média: ${diasSuperados}`);


}

getData();




// Questão 4

/*
let total = 0;

const estados = [{
    
        name: "SP",
        valor: 67836.43
    
}, {
    name: "RJ",
    valor: 36678.66
}, {
    name: "MG",
    valor: 29229.88
}, {
    name: "ES",
    valor: 27165.48
},
{
    name: "OUTROS",
    valor: 19849.53
}

]

estados.forEach((element) => {
    total += element.valor;
})

console.log("Total do valor:", total);


estados.forEach((element) => {
    let porcentagemEstado = (element.valor * 100) / total;
    console.log(`Porcentagem do estado de ${element.name}: ${porcentagemEstado.toFixed(2)}%`);
    })*/


/* Questão 5 --Basta colocar a palavra no parâmetro da função-- Enunciado: Escreva um programa que inverta os caracteres de um string.

*/

/*
let palavraVazia = ""

function inverterString(palavra){

    for(let i=palavra.length - 1;i>=0;i--){
        palavraVazia += palavra[i];
    }

    console.log(palavraVazia);

}

inverterString("Palavra aqui!");
*/

