const nomeDoHeroi = "Cleisoon";
let nivel = "";
let xp = 7200;

if(xp <= 1000) {
    nivel = "ferro";
    console.log(`O Herói de nome *${nomeDoHeroi}* está no nivel de *${nivel.toUpperCase()}*`)
} else if(xp > 1000 && xp <= 2000 ) {
    nivel = "bronze";
    console.log(`O Herói de nome *${nomeDoHeroi}* está no nivel de *${nivel.toUpperCase()}*`)
} else if(xp > 2000 && xp <= 5000 ) {
    nivel = "prata";
    console.log(`O Herói de nome *${nomeDoHeroi}* está no nivel de *${nivel.toUpperCase()}*`)
} else if(xp > 6000 && xp <= 7000 ) {
    nivel = "ouro";
    console.log(`O Herói de nome *${nomeDoHeroi}* está no nivel de *${nivel.toUpperCase()}*`)
} else if(xp > 7000 && xp <= 8000 ) {
    nivel = "platina";
    console.log(`O Herói de nome *${nomeDoHeroi}* está no nivel de *${nivel.toUpperCase()}*`)
} else if(xp > 8000 && xp <= 9000 ) {
    nivel = "Ascendente";
    console.log(`O Herói de nome *${nomeDoHeroi}* está no nivel de *${nivel.toUpperCase()}*`)
} else if(xp > 9000 && xp <= 10000 ) {
    nivel = "Imortal";
    console.log(`O Herói de nome *${nomeDoHeroi}* está no nivel de *${nivel.toUpperCase()}*`)
} else {
    nivel = "Radiante";
    console.log(`O Herói de nome *${nomeDoHeroi}* está no nivel de *${nivel.toUpperCase()}*`)
}