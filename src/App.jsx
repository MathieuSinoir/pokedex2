import PokemonCard from "./components/PokemonCard"
import "./App.css"
import { useState } from "react";
import NavBar from "./components/NavBar";



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const incrementation = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1)
    }
  }

  const decrementation = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1)
    }
  }
  return (

    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar navigation={decrementation}
        bar={incrementation}
        pokemonIndex={pokemonIndex}
        pokemonListLength={pokemonList.Length} />

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


