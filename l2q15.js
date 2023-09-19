// 15. Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os 
// valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: 
// equilátero, isósceles ou escaleno.
//     ◦ Dicas:
//     ◦ Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o 
//     terceiro;
//     ◦ Triângulo Equilátero: três lados iguais;
//     ◦ Triângulo Isósceles: quaisquer dois lados iguais;
//     ◦ Triângulo Escaleno: três lados diferentes;
const Prompt = require('prompt-sync')

const verificar_triangulo = ((a,b,c) =>{
    if(a + b > c && a + c > b && b + c > a){
        console.log('As medidas formam um triangulo')
        return true
    }
    else{
        console.log('As medidas não formam um triangulo')
        return false
    }
})

const classifica_triangulo = ((a,b,c) => {
    if(a == b && b == c && a == c){
        console.log('Triangulo Equilátero')
    }
    else if(a != b && b != c && a != c){
        console.log('Triangulo Escaleno')
    }
    else{
        console.log('Triangulo Isósceles')
    }
})

const prompt = Prompt()

const a = parseInt(prompt('Informe o valor de A: '))
const b = parseInt(prompt('Informe o valor de B: '))
const c = parseInt(prompt('Informe o valor de C: '))

if (verificar_triangulo(a,b,c)){
    classifica_triangulo(a,b,c)    
}
