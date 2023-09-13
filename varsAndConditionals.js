/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


let jonSnowAttack = 25;
let jamieLannisterAttack = 135;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has a better attack than Jamie Lannister')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister has a better attack than John snow')
} else {
    console.log('Fighters are evenly matched')
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow has been killed')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow health is down to ${jonSnowHealth}`)
}