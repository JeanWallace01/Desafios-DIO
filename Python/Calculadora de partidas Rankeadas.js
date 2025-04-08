/*

Forma 1

- Foi usada o laço de repetição do while
- a condição foi feita com Switch case
- Executando a função atráves de uma variável

*/


//Definindo o contador
let contador = 0


//Criando função e passando dois parâmetros, usando a estrutrura switch case para fazer a lógica
function calculadoraRanked(quantidadeVitoria, quantidadeDerrota) {

    //Realizando conta das vitórias
     let contaRanked = quantidadeVitoria - quantidadeDerrota


     //Usando laço de repetição do while
     do {
        
        switch(true) {
            case(quantidadeVitoria <= 10):
                console.log(`O heroi tem de saldo de ${quantidadeVitoria} vitórias e está no nível:  Ferro `)
                    break
            case(quantidadeVitoria >= 11 && quantidadeVitoria <= 20):
                console.log(`O heroi tem de saldo de ${quantidadeVitoria} vitórias e está no nível:  Bronze `)
                    break
            case(quantidadeVitoria >= 21 && quantidadeVitoria <= 50):
                console.log(`O heroi tem de saldo de ${quantidadeVitoria} vitórias e está no nível:  Prata `)
                    break
            case(quantidadeVitoria >= 51 && quantidadeVitoria <= 80):
                console.log(`O heroi tem de saldo de ${quantidadeVitoria} vitórias e está no nível:  Ouro `)
                    break
            case(quantidadeVitoria >= 81 && quantidadeVitoria <= 90):
                console.log(`O heroi tem de saldo de ${quantidadeVitoria} vitórias e está no nível:  Diamante `)
                    break
            case(quantidadeVitoria >= 91 && quantidadeVitoria <= 100):
                console.log(`O heroi tem de saldo de ${quantidadeVitoria} vitórias e está no nível:  Lendário `)
                    break
            case(quantidadeVitoria >= 101):
                console.log(`O heroi tem de saldo de ${quantidadeVitoria} vitórias e está no nível:  Imortal `)                                       
        }

        contador++

    } while (contador < 0)


    //Após a execução da lógica do laço é retornado o valor da variável     
    return contaRanked

}

     

//Executando a função
let resultado = calculadoraRanked(1200,173) 




/*

Forma 2

- Foi usada uma método separado para cada função ter seu papel
- Função para pegar a quantidade de vitória
- Função para pegar a Level
- Função Main, para executar as duas funções

*/



//Declarando a função getWins que irá pegar os valores das vitórias e fazer a lógica mostragem para o usuário
function getWins(qtdeVitoria, qtdeDerrota) {

    //Realizando conta das vitórias
    let contaVitorias = qtdeVitoria - qtdeDerrota
    
    //Criando laço de repetição 
    for(let contador = 0; contador <= 0; contador++) {

        if(contaVitorias <= 10) {
            console.log(`O Heroi tem saldo de ${contaVitorias} vitórias, está no nível de ${getLevel("Ferro")}`) } 
                

            if (contaVitorias >= 11 && contaVitorias <= 20 ) {
                    console.log(`O Heroi tem saldo de ${contaVitorias} vitórias, está no nível de ${getLevel("Bronze")}`) }               


                    if (contaVitorias >= 21 && contaVitorias <= 50) {
                            console.log(`O Herói tem de ${contaVitorias} vitórias, está no nível de ${getLevel("Prata")}`)  } 
        
        
                            if (contaVitorias >= 51 && contaVitorias <= 80) {
                                console.log(`OHerói tem saldo de ${contaVitorias} vitórias, está no nível de ${getLevel("Ouro")}`) } 


                                    if (contaVitorias >= 81 && contaVitorias <= 90) {
                                        console.log(`O Herói tem saldo de ${contaVitorias} vitórias, está no nível de ${getLevel("Diamante")}`) } 
            

                                            if (contaVitorias >= 91 && contaVitorias <= 100) {
                                                console.log(`O Herói tem saldo de ${contaVitorias} vitórias, está no nível de ${getLevel("Lendário")}`) }                                           

                                                
                                                    if (contaVitorias >= 101) {
                                                        console.log(`O Herói tem saldo de ${contaVitorias} vitórias, está no nível de ${getLevel("Imortal")}`) }


    }

    //Após a execução da lógica do laço é retornado o valor da variável 
    return contaVitorias 

}


//Função para pegar o Level e passando o Level por parâmetro
function getLevel(level) {

    let expLevel = level
    return expLevel

}


//Função para executar as duas funções definidas
function Main() {

    getWins(18,5)
    getLevel()

}


//Chamando função Main
Main()



