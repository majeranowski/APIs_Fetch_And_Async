let pokemon = [];
//fetching API
fetch("https://pokeapi.co/api/v2/pokemon/psyduck/")
    .then(res => res.json())
    .then((result) => {
        //storing your favorite pokemon in the pokemon array
        pokemon = result;
        //displaying just the lines we need
        console.log("Name: \n" + pokemon.name +"\n");
        console.log("Weight: \n" + pokemon.weight +"\n");
        console.log("Abilities: \n");
        console.log(pokemon.abilities)
    }),
    (error) => {
        console.log(error);
    }
