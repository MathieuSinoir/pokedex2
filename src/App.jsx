import PokemonCard from "./components/PokemonCard"
import "./App.css"
import { useState } from "react";



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)

  const incrementation = () => setPokemonIndex(pokemonIndex + 1)
  const decrementation = () => setPokemonIndex(pokemonIndex - 1)



  return (

    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={incrementation}>Suivant</button>
      <button onClick={decrementation}>Precedent</button>
    </div>
  )

}


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App


