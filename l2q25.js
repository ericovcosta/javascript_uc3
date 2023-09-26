/*25. Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    1. "Telefonou para a vítima?"
    2. "Esteve no local do crime?"
    3. "Mora perto da vítima?"
    4. "Devia para a vítima?"
    5. "Já trabalhou com a vítima?"
     O programa deve no final emitir uma classificação sobre
      a participação da pessoa no crime.
      Se a pessoa responder positivamente a 2 questões ela
    deve ser classificada como "Suspeita", 
    entre 3 e 4 como "Cúmplice" e 5
    como "Assassino". Caso contrário, ele será classificado como "Inocente". */
    const Prompt = require('prompt-sync')
    const prompt = Prompt()

    let quantidade_sim = 0
    let resp = ''

    console.log('Responda as perguntas com Sim ou Não')
    do{
        resp = prompt("1. Telefonou para a vítima?")
        if(resp === 'sim'){
            quantidade_sim++
        }
    }while(resp !== 'sim' && resp !== 'não')
    do{
        resp = prompt("2. Esteve no local do crime?")
        if(resp === 'sim'){
            quantidade_sim++
        }
    }while(resp !== 'sim' && resp !== 'não')
    do{
        resp = prompt("3. Mora perto da vítima?")
        if(resp === 'sim'){
            quantidade_sim++
        }
    }while(resp !== 'sim' && resp !== 'não')
    do{
        resp = prompt("4. Devia para a vítima?")
        if(resp === 'sim'){
            quantidade_sim++
        }
    }while(resp !== 'sim' && resp !== 'não')
    do{
        resp = prompt("5. Já trabalhou com a vítima?")
        if(resp === 'sim'){
            quantidade_sim++
        }
    }while(resp !== 'sim' && resp !== 'não')

    if(quantidade_sim == 0){
        console.log("inocente")
    }else if(quantidade_sim < 3){
        console.log("suspeito")
    }else if(quantidade_sim < 5){
        console.log("cumplice")
    }else{
        console.log("assassino")
    }