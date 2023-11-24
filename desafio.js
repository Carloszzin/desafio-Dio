let nome = prompt("Qual o nome?")
let xp = Number(prompt("Coloque a quantidade do seu XP.(0 até 15.000)"))
switch(true){
    case xp < 1000:
        console.log("Sua patente é: Ferro")
    break;
    case xp > 1001 && xp <= 2000:
        console.log("Sua patente é: Bronze")
    break;
    case xp > 2001 && xp <= 5000:
        console.log("Sua patente é: Prata")
    break;
    case xp > 6001 && xp <= 7000:
        console.log("Sua patente é: Ouro")
    break;
    case xp > 7001 && xp <= 8000:
        console.log("Sua patente é: Platina Diamante")
    break;
    case xp > 8001 && xp <= 9000:
        console.log("Sua patente é: Ascendente")
    break;
    case xp > 9001 && xp <= 10000:
        console.log("Sua patente é: Imortal")
    break;
    case xp >= 10001:
        console.log("Sua patente é: Radiante")
    break;
    default:
        console.log("Você ainda não subiu de patente..")
    break;
}

console.log("Seu nickname: "+nome)
console.log("Sua quantidade de XP: "+xp)