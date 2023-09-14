/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = ['poke ball', 'poke ball', 'potion', 'beef jerkey', 'running shoes']

let pokemon = []

backpack.push('oreos')
backpack.push('oreos')

console.log('after buying oreos, this is our backpack')
console.log(backpack)

backpack.push('pokedex')
pokemon.push('pikachu')

console.log('after meeting prof. oak, our backpack and pokemon are;')
console.log(backpack)
console.log(pokemon)


for (let i = 0; i < 4; i = i + 1) {
    pokemon.push('pidgey')
}

console.log('after the pidgeys, our pokemon are now:')
console.log(pokemon)

backpack.splice(3,4)

console.log('after the binge and the giveaway, backpack is now:')
console.log(backpack)

let newPokemon = 'Charizard'

pokemon.push(newPokemon)

console.log('after catching charizard,our pokemons are now')
console.log(pokemon)

console.log('here is pikachu')
let cutestPokemon = pokemon[0]
console.log(cutestPokemon)

let clonedPidgeys = pokemon.slice(1,5)
console.log('here are your cloned pidgeys')
console.log(clonedPidgeys)


console.log('pokemon check')
console.log(pokemon)

backpack.unshift('jynx statue')
console.log('backpack after adding the statue:')
console.log(backpack)

backpack.shift()
console.log('backpack after dumping the statue')
console.log(backpack)

let favePokemon = 'Butterfree'
backpack.shift()

let lunch = pokemon.splice(3,1,favePokemon)

console.log('here is my bag after getting butterfree')
console.log(backpack)
console.log('my pokemons')
console.log(pokemon)
console.log('my lunch:')
console.log(lunch)

for (let i = 0; i < pokemon.length; i = i + 1) {
    let currentPokemon = pokemon[i]
    if (currentPokemon === 'pidgey') {
        pokemon[i] = 'pigeotto'
    }
}

console.log('after the evolution event, my pokemon are now:')
console.log(pokemon)