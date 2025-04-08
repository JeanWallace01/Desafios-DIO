let nomeHeroi = "João";
let nivelDeXP = 11100;
let nivelRanqueado = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente", "Imortal", "Radiante"];
let contador = 0

do {
    console.log(`O Herói de nome ${nomeHeroi} está no nível de: `)


    switch (true) {
        case (nivelDeXP <= 1000):
            console.log(`${nivelRanqueado[0]}`);
            break;
        case (nivelDeXP >= 1001 && nivelDeXP <= 2000):
            console.log(`${nivelRanqueado[1]}`);
            break;
        case (nivelDeXP >= 2001 && nivelDeXP <= 5000):
            console.log(`${nivelRanqueado[2]}`);
            break;
        case (nivelDeXP >= 5001 && nivelDeXP <= 7000):
            console.log(`${nivelRanqueado[3]}`);
            break;
        case (nivelDeXP >= 7001 && nivelDeXP <= 8000):
            console.log(`${nivelRanqueado[4]}`);
            break;
        case (nivelDeXP >= 8001 && nivelDeXP <= 9000):
            console.log(`${nivelRanqueado[5]}`);
            break;
        case (nivelDeXP >= 9001 && nivelDeXP <= 10000):
            console.log(`${nivelRanqueado[6]}`);
            break;
        case (nivelDeXP > 10000):
            console.log(`${nivelRanqueado[7]}`);
            break;
        default:
            console.log("XP inválido!");
            break;
    }

    contador++


} while (contador > 9)


 