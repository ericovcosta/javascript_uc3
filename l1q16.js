/*
Faça um programa para uma loja de tintas. 
O programa deverá pedir o tamanho em metros 
quadrados da área a ser pintada. 
Considere que a cobertura da tinta é de 
1 litro para cada 3 metros quadrados e que a 
tinta é vendida em latas de 18 litros, 
que custam R$ 80,00. Informe ao usuário a
quantidades de latas de tinta a serem compradas e
o preço total. 
*/
const Prompt = require('prompt-sync')
const prompt = Prompt()

let area = parseFloat(prompt('Informe a área em m²: '))

let quantidade_latas = parseInt((area / 55) + 1)
let valor = (quantidade_latas * 80.00).toFixed(2)

console.log(`A quantidade de tinta é: ${quantidade_latas} latas`)
console.log(`O valor é R$ ${valor}`)