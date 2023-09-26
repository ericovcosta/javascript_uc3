/*
17. Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho
em metros quadrados da área a ser pintada. Considere que a cobertura da
tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida
em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros,
que custam R$ 25,00.
    - Informe ao usuário as quantidades de tinta a serem compradas e 
    os respectivos preços em 3 situações:
    - comprar apenas latas de 18 litros;
    - comprar apenas galões de 3,6 litros;
    - misturar latas e galões, de forma que o 
    desperdício de tinta seja menor. Acrescente 10% de 
    folga e sempre arredonde os valores para cima, isto é, 
    considere latas cheias.
*/
const Prompt = require('prompt-sync')
const prompt = Prompt()

let area = parseFloat(prompt('Informe a área em m²: '))

let lata = 18 * 6 //m² que uma lata cobre
let galao = 3.6 * 6

//apenas lata
let quantidade_latas = parseInt((area / (lata + 0.1)) + 1)
let valor = (quantidade_latas * 80.00).toFixed(2)
console.log(`A quantidade de tinta é: ${quantidade_latas} latas`)
console.log(`O valor é R$ ${valor}`)

//apenas galão
 quantidade_latas = parseInt((area / (galao + 0.1)) + 1)
 valor = (quantidade_latas * 25.00).toFixed(2)
 console.log(`A quantidade de tinta é: ${quantidade_latas} galões`)
 console.log(`O valor é R$ ${valor}`)

//latas e galões
quantidade_latas = parseInt(area / lata)
quantidade_galoes = parseInt(((area % lata)/(galao+0.1))+1)
valor = (quantidade_latas * 80.00 + quantidade_galoes * 25).toFixed(2)
console.log(`A quantidade de tinta é: ${quantidade_latas} latas`)
console.log(`A quantidade de tinta é: ${quantidade_galoes} galões`)
console.log(`O valor é R$ ${valor}`)
