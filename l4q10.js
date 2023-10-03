/*
Faça um Programa que leia dois vetores com 10 elementos cada.
Gere um terceiro vetor de 20 elementos, cujos valores deverão 
ser compostos pelos elementos intercalados dos dois outros vetores. 
 */
let listaA = [22,24,14,78,28,99,8,15,13,10]
let listaB = [17,1,16,33,12,32,45,7,79,88]

console.log(`${listaA} e ${listaB}`)

let listaC = []
//carrega a lista com os elementos das outras
//não é possível usar o foreach pois a lista
//esta vazia, não há com o que iterrar
for(let i=0, a=0, b=0; i < 20;i++){
    if(i%2 == 0){
        listaC.push(listaA[a++])
    } else {
        listaC.push(listaB[b++])
    }
}

console.log(listaC)
//ordena a lista, substituindo a ordem original
console.log(listaC.sort((a,b) => a - b))

//filtra (seleciona) os itens a partir de uma condição
//dentro da função de segundo plano
const resultado = listaC.filter((idade)=>{
    return idade >= 18
})

//exibi cada item da lista, segundo a regra
//defina na função
resultado.forEach((item, index)=>{
    console.log(`${index+1} : ${item}`)
})

//retorna uma nova lista alterando cada item
//da lista original com as operações da função
//de segundo plano
const novaListaA = listaA.map((item)=>{
    return item + 3
})

console.log(novaListaA)