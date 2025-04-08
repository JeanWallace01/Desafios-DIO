//GAMBIARRA

// class heroi {

//     constructor(tipo, nome = "teste",idade = "teste") {
//         this.nome = nome
//         this.idade = idade
//         this.tipo = tipo
//     }

//     verificaTipoAtaque(tipoAtaque) {
//         if (tipoAtaque === "mago") {
//             return "usando magia"
//         } else if (tipoAtaque === "guerreiro") {
//             return "usando espada"
//         } else if (tipoAtaque === "monge") {
//             return "usou artes marciais"
//         } else if (tipoAtaque === "ninja") {
//             return "usando shuriken"
//         }
//     }


//     executandoTipoAtaque(tipoAtaque) {
//         return this.verificaTipoAtaque(tipoAtaque); // Agora retorna o valor de verificaTipoAtaque
//     }


//     pegandoTipo(tipoHeroi) {
//         return tipoHeroi; // Retorna o tipoHeroi
//     }


// }

// let objectTeste = new heroi()

// let guardandoTipo = objectTeste.pegandoTipo("mago")
// let verificandoTipo = objectTeste.executandoTipoAtaque("mago")


// console.log(`O tipo ${guardandoTipo} atacou ${verificandoTipo}`)



class heroi {

    constructor(tipo) {

        this.tipo = tipo

    }


    vericarFull() {

        let tipoAtaque = ""

        switch(true){
            case(this.tipo === "mago"):
                tipoAtaque = "usou magia"
                    break

                        case(this.tipo === "guerreiro"):
                            tipoAtaque = "usou espada"
                                break
                        
                                case(this.tipo === "monge"):
                                    tipoAtaque = "usou artes marciais"
                                        break

                                        case(this.tipo === "ninja"):
                                            tipoAtaque = "usando shuriken"
                                                break
            
        }   

        console.log(`O ${this.tipo} atacou ${tipoAtaque}`)

    }



}


let testeObject = new heroi("ninja")

testeObject.vericarFull()