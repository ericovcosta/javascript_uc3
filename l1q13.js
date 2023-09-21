/* Tendo como dado de entrada a altura (h) de uma pessoa, 
  construa um algoritmo que calcule seu peso ideal,
  utilizando as seguintes fórmulas:
     Para homens: (72.7*h) - 58
     Para mulheres: (62.1*h) - 44.7 */

/* fazer de acordo com o sexo */

const Prompt = require('prompt-sync')
const prompt = Prompt()
let sexo = ''
do{
    sexo = prompt('Informe o sexo F ou M: ')
    sexo = sexo.toLowerCase()
}while(sexo !== 'f' && sexo !== 'm');

let altura = parseInt(prompt('Informe a altura em cm: '))

// if(sexo === 'm'){
//     console.log(`O Peso ideal para Homens é: ${((72.7*altura/100) - 58).toFixed(2)} `)
// }else{
//     console.log(`O Peso ideal para Mulheres é: ${((62.1*altura/100) - 44.7).toFixed(2)} `)
// }

const peso = ((sexo,altura)=>{
    if(sexo === 'm'){
        console.log(`O Peso ideal para Homens é: ${((72.7*altura/100) - 58).toFixed(2)} `)
    }else{
        console.log(`O Peso ideal para Mulheres é: ${((62.1*altura/100) - 44.7).toFixed(2)} `)
    }
})

peso(sexo,altura)