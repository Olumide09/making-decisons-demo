/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

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

jonSnowDefense += 25;

// second attack

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense ) {
    console.log('Jon snow is dead')
} else {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
    console.log(`Jon Snows health is down to ${jonSnowHealth}`)
}

let isDead = false 

for (let i = 1; i <= 1; i++) {
    isDead = Math.random() > .5
    if (isDead === true) {
        console.log(`John has died after ${i} rounds`)
        break
    }
}

if (isDead === false) {
    console.log('It is a miracle bro is alive')

    while (jonSnowHealth > 0) {
        console.log('Jamie punches John')
        jonSnowHealth -= 5;
    }
    console.log('Okay, Jon did not make it.')
}


