let frutas = {
    banana : {
        quantidade : 15,
        unidade : 'cx',
        origem : 'China'
    },
    morango : {
        quantidade : 15,
        unidade : 'cx',
        origem : 'França'
    },
    tomate : {
        quantidade : 20,
        unidade: 'cx',
        origem : 'Itália'
    },
    jaca : {
        quantidade : 20,
        unidade: 'cx',
        origem : 'Índia'
    },
    caju : {
        quantidade : 20,
        unidade: 'cx',
        origem : 'Brasil'
    }
}

// let key_frutas = Object.keys(frutas)
// console.log(key_frutas)
// let value_frutas = Object.values(frutas)
// console.log(value_frutas)
let ent_frutas = Object.entries(frutas)
// console.log(ent_frutas)
ent_frutas.forEach((cesta)=>{
    let [item, valor] = cesta
    console.log(`${item} - ${Object.values(valor)}`)
    // for(arr_frutas of cesta){
    //     console.log(arr_frutas)
    // }
})