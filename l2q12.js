// 12. Faça um programa para o cálculo de uma folha de pagamento, 
// sabendo que os descontos são do Imposto de Renda, que depende do
//  salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o 
//  FGTS corresponde a 11% do Salário Bruto, mas não é descontado 
//  (é a empresa que deposita). O Salário Líquido corresponde ao Salário 
//  Bruto menos os descontos. O programa deverá pedir ao usuário o valor 
//  da sua hora e a quantidade de horas trabalhadas no mês.
//     ◦ Desconto do IR:
//     ◦ Salário Bruto até 900 (inclusive) - isento
//     ◦ Salário Bruto até 1500 (inclusive) - desconto de 5%
//     ◦ Salário Bruto até 2500 (inclusive) - desconto de 10%
//     ◦ Salário Bruto acima de 2500 - desconto de 20% 
// Imprima na tela as informações, 
// dispostas conforme o exemplo abaixo. No exemplo o valor da
//  hora é 5 e a quantidade de hora é 220.
//               Salário Bruto: (5 * 220)        : R$ 1100,00
//               (-) IR (5%)                     : R$   55,00  
//               (-) INSS ( 10%)                 : R$  110,00
//               FGTS (11%)                      : R$  121,00
//               Total de descontos              : R$  165,00
//               Salário Liquido                 : R$  935,00

const Prompt = require('prompt-sync')

//calcular o IR
function calcula_ir(salario){
    if(salario > 2500){
        return salario * 0.2
    }
    else if(salario > 1500){
        return salario * 0.1
    }
    else if(salario > 900){
        return salario * 0.05
    }
    else{
        return 0
    }
}
//informa a faixa do IR
function faixa_ir(salario){
    if(salario > 2500){
        return '20%'
    }
    else if(salario > 1500){
        return '10%'
    }
    else if(salario > 900){
        return '5%'
    }
    else{
        return 'ISENTO'
    }
}
//calculo do INNS
const calcula_inss = ((salario) => {
    return salario * 0.1
});
//calculo do FGTS
function calcula_fgts(salario){
    return salario * 0.11
}
//calculo do sindicato
function calcula_sidicato(salario){
    return salario * 0.03
}
function relatorio(hora, valor){
    const salario = valor * hora
    console.log(`Salário Bruto: (${hora}*${valor})          : R$ ${salario}`)
    console.log(`(-) IR (${faixa_ir(salario)})                     : R$   ${calcula_ir(salario)}`)
    console.log(`(-) INSS (10%)                  : R$  ${calcula_inss(salario)}`)
    console.log(`FGTS (11%)                      : R$  ${calcula_fgts(salario)}`)
    console.log(`Total de descontos              : R$  ${calcula_ir(salario)+calcula_inss(salario)}`)
    console.log(`Salário Liquido                 : R$  ${salario-(calcula_ir(salario)+calcula_inss(salario))}`)
}
function entrada_dados(){
    const prompt = Prompt()

    horas_mes = parseFloat(prompt('Informe a quantidade de horas trabalhadas: '))
    valor_hora = parseFloat(prompt('Informe o valor da hora de trabalho: '))
    relatorio(horas_mes, valor_hora)
}

entrada_dados()